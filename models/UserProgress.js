const {PROGRESS, COMPLETE, FILL_IN_BLANK, MATCHING, MCQ_QUESTION, RATING, TRUE_FALSE} = require("../shared/constants");

const mongoose = require('mongoose');

const chapterProgress = new mongoose.Schema({
    activityType: {
        type: String,
        enum: [RATING, MCQ_QUESTION, MATCHING, TRUE_FALSE, FILL_IN_BLANK]
    },
    activityKey: String,
    chapterId: String,
    moduleId: Number,
    data: mongoose.Schema.Types.Mixed,
    score: mongoose.Schema.Types.Mixed,
    userId: {type: mongoose.Schema.Types.ObjectId, index: true},
    attempt: Number
});


const moduleProgress = new mongoose.Schema({
    status: {
        type: String,
        enum: [PROGRESS, COMPLETE]
    },
    activitiesScore: [mongoose.Schema.Types.Mixed],
    totalActivities: Number,
    moduleId: {type: Number},
    userId: {type:mongoose.Schema.Types.ObjectId, index:true}
});


const userProgress = new mongoose.Schema({
    // userId
    _id: {
        type: String,
        required: true
    },
    // moduleId
    progress: [{type: mongoose.Schema.Types.ObjectId, ref: 'ModuleProgress'}],
    progressPercent: String
});

module.exports.ChapterProgress = mongoose.model('ChapterProgress', chapterProgress);
module.exports.UserProgress    = mongoose.model('UserProgress', userProgress);
module.exports.ModuleProgress  = mongoose.model('ModuleProgress', moduleProgress);

