const asyncHandler = require('../middleware/async');
const {MODULE_ID, SUCCESS} = require('../shared/constants');
const ObjectId = require('mongoose').Types.ObjectId;
const {ModuleProgress} = require('../models/UserProgress');

exports.getModuleStatus = asyncHandler(async (req, res) => {
    const moduleIds = req.body;
    const userId = req.params.userId;

    const result = await ModuleProgress.find({
        [MODULE_ID]: {
            $in: moduleIds
        },
        userId: ObjectId(userId)
    }).lean();

    res.status(200).json({
        message: SUCCESS,
        data: result
    })
    ;
});
