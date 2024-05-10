const {PROGRESS, COMPLETE, _ID} = require("../shared/constants");

const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const {ModuleProgress,ChapterProgress} = require('../models/UserProgress');
const metadata = require("../metadata/metadataMap");
const { outlookMail } = require("../config/db");
const passwordGenerate = require('generate-password');
exports.getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    res.status(200).json({
        success: true,
        data: user
    });
});


exports.createUser = asyncHandler(async (req, res, next) => {
    const userPassword = passwordGenerate.generate({
        length:5,
        numbers:true
    });
    req.body.password = `${req.body.name}@${userPassword}`;
    const user = await User.create(req.body);
    outlookMail.sendEmail({
            auth: {
                user: process.env.OUTLOOK_MAIL,
                pass:  process.env.OUTLOOK_PASSWORD
            },
            from: process.env.OUTLOOK_MAIL,
            to: req.body.email,
            subject: 'Welcome to the Spiritual Curriculum Teacher Training Course',
            text: `Your Account has been created kindly note the login to the course \n Course Link: https://tinyurl.com/spiritual-curriculum-def \n Login id:
             ${req.body.email} \n Password: ${userPassword}`,
            onError: (e) => console.log(e),
            onSuccess: (i) => console.log(i)
    });


    res.status(201).json({
        success: true,
        data: user
    });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: user
    });
});


exports.deleteUser = asyncHandler(async (req, res, next) => {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        data: {}
    });
});

exports.getUsersCount = asyncHandler(async (req, res, next) => {
    const count = await User.count();
    res.status(200).json({
        success: true,
        data: {usersCount: count}
    });
});


exports.deleteUserProgress = asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const {moduleId, chapter, activityType, activityKey} = req.body;
 
    const chapterProgress = await ChapterProgress.findOne({
        userId: userId,
        activityKey: activityKey,
        activityType: activityType,
        chapterId: chapter,
        moduleId: moduleId
    });

    // empty data array
    chapterProgress.data = [];
    await chapterProgress.save();

    const module = await ModuleProgress.findOne({
        userId: userId,
        moduleId: moduleId
    });

    if (module) {
        let index = module.activitiesScore.findIndex((ac) => {
            return (ac.activityKey === activityKey && ac.activityType === activityType && ac.chapter === chapter);
        });
        if (index >= 0) {
            let activityScore = JSON.parse(JSON.stringify(module.activitiesScore));
            activityScore.splice(index, 1);
            module.activitiesScore = activityScore;
            module.status = PROGRESS;
        }
        await module.save();
    }

    res.status(200).json({success: true, message: "data deleted"});
});

exports.saveUserProgress = asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const {moduleId, chapter, activityType, activityKey, data, score} = req.body;
    const chapterProgress = await ChapterProgress.findOne({
        userId: userId,
        activityKey: activityKey,
        activityType: activityType,
        chapterId: chapter,
        moduleId: moduleId
    });

    const scoreObject = {score, activityType, activityKey, chapter};
    const module = await getModule(userId,moduleId);
    
    if (module) {
        let status = await updateModuleAndgetStatus(module, scoreObject);
        if (status === COMPLETE) {
            await checkAndCreateNextModule(userId, module)
        }

    } else {
        let newModule = await createModule(userId, moduleId, scoreObject);
        if (newModule.status === COMPLETE) {
            await checkAndCreateNextModule(userId, newModule);
        }
    }

    if (!chapterProgress) {
        const newChapterProgress = new ChapterProgress({
            userId: userId,
            activityType: activityType,
            activityKey: activityKey,
            chapterId: chapter,
            moduleId: moduleId,
            data: data,
            score: score,
            attempt: 1
        });
        await newChapterProgress.save();

    } else {
        chapterProgress.data = data;
        chapterProgress.score = score;
        chapterProgress.attempt = ++chapterProgress.attempt;
        await chapterProgress.save();
    }
    res.status(200).json({success: true,message:"Progress Saved"});

});

// Helper functions

const getModuleStatus = (module) => {
    if (module.activitiesScore.length < module.totalActivities) {
        return PROGRESS;
    }
    for (let activityScore of module.activitiesScore) {
        if (activityScore.score.percentage < metadata.minimumPassPercent) {
            return PROGRESS;
        }
    }
    return COMPLETE;
};

const updateModuleAndgetStatus = async ( module, scoreObject) => {
    module.activitiesScore.push(scoreObject);
    module.status = getModuleStatus(module);
    await module.save();
    return module.status;
};

const createModule = async (userId, moduleId, scoreObject) => {
    const totalNoOfActivities = metadata.modulesArray.find((m) => m[_ID] === String(moduleId)).totalQuestions;
  
    const status = (scoreObject) ? getModuleStatus({
        activitiesScore: [scoreObject],
        totalQuestions: totalNoOfActivities
    }) : PROGRESS;
 
    return  await ModuleProgress.create({
        userId: userId,
        activitiesScore: scoreObject ? [scoreObject] : [],
        totalActivities: totalNoOfActivities,
        moduleId: moduleId,
        status: status
    });
};

const getModule = async (userId, moduleId) => {
    let module = await ModuleProgress.findOne({
        userId: userId,
        moduleId: moduleId
    });
    return module;
}

const checkAndCreateNextModule = async (userId, module) => {
    const moduleExists = await getModule(userId, module.moduleId + 1);
    if (!moduleExists) {
        await createModule(userId, module.moduleId + 1);
    }
};