const express = require("express");
const {
    getActivityData,getUserActivity
} = require("../controllers/activity");


const router = express.Router({mergeParams: true});
const advancedResults = require("../middleware/advancedResults");
const {protect} = require("../middleware/auth");

router.use(protect);

router
    .route("/:id")
    .get(getUserActivity)
    .post(getActivityData);


module.exports = router;