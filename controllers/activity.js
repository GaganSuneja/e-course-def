const {ChapterProgress} = require('../models/UserProgress');
const {SCORE, DATA, ATTEMPTS, SUCCESS, _ID, CHAPTERS, FILL_IN_BLANK, MCQ_QUESTION, RATING, TRUE_FALSE, QUESTIONS, QUESTION, PICK_COUNT} = require("../shared/constants");
const metadata = require("../metadata/metadataMap");
const asyncHandler = require('../middleware/async');
const ObjectId = require('mongoose').Types.ObjectId;

exports.getActivityData = asyncHandler(async (req, res) => {
    const {type, activityKey, chapter, moduleId, checkUserResponse} = req.body;
    let chapterProgress = null;
    if (checkUserResponse) {
        chapterProgress = await ChapterProgress.findOne({
            userId: req.params.id,
            activityKey: activityKey,
            activityType: type,
            chapterId: chapter,
            moduleId: moduleId
        }).lean();
    }

    let activities, userSubmitted = {}, score = 0, attempts = 0;
    let pickCount = 0;
    
    if (chapterProgress && chapterProgress.data && chapterProgress.data.length) {
        activities = chapterProgress[DATA];
        if(type === RATING) {
            activities = [{question:activities}];
        }
        score = chapterProgress[SCORE];
        attempts = chapterProgress[ATTEMPTS];
        userSubmitted = true;
    } else {
        const moduleToAccess = metadata.modulesArray.find((module) => module[_ID] === String(moduleId));
        pickCount = moduleToAccess[CHAPTERS][chapter][type][activityKey][PICK_COUNT];
        switch (type) {
            case RATING:
                activities = metadata.ratingQuestions.filter((r)=>{
                    return moduleToAccess[CHAPTERS][chapter][RATING][activityKey][QUESTIONS].includes(r._id);
                });
                break;
            case MCQ_QUESTION:
                activities =  metadata.mcqQuestions.filter((m)=>{
                    return moduleToAccess[CHAPTERS][chapter][MCQ_QUESTION][activityKey][QUESTIONS].includes(m._id);
                });
                break;
            case FILL_IN_BLANK:
                activities = metadata.fillInBlankQuestions.filter((f)=>{
                    return moduleToAccess[CHAPTERS][chapter][FILL_IN_BLANK][activityKey][QUESTIONS].includes(f.id)
                });
                break;
            case TRUE_FALSE:
                activities = metadata.trueFalseQuestions.filter((tf)=>{
                    return moduleToAccess[CHAPTERS][chapter][TRUE_FALSE][activityKey][QUESTIONS].includes(tf._id)
                })
                break;
        }
        userSubmitted = false;
    }

    res.status(200).json({
        message: SUCCESS,
        data: {pickCount, activities, userSubmitted, score, attempts}
    })

});


exports.getUserActivity = asyncHandler(async (req, res) => {
    let userActivities = await ChapterProgress.aggregate([{$match: {'userId': ObjectId(req.params.id)}}, {
        $group: {
            _id: "$moduleId",
            count: {$sum: 1}
        }
    }]);

    let countMap = {};
    for (let activity of metadata.modulesArray) {
        const userActivity = userActivities.find((ac) => ac[_ID] === activity[_ID]);
        if (userActivity && userActivity.count === activity.totalQuestions) {
            countMap[activity[_ID]] = {
                moduleStatus: 1,
                moduleId: activity[_ID]
            };
        } else if (userActivity && userActivity.count < activity.totalQuestions) {
            countMap[activity[_ID]] = {
                moduleStatus: 0,
                moduleId: activity[_ID]

            };
        } else {
            countMap[activity[_ID]] = {
                moduleStatus: -1,
                moduleId: activity[_ID]
            };
        }
    }


    res.status(200).json({
        message: SUCCESS,
        data: {countMap}
    })
});