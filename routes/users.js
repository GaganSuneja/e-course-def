const express = require("express");
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getUsersCount,
    saveUserProgress,
    deleteUserProgress
} = require("../controllers/users");

const User = require("../models/User");

const router = express.Router({mergeParams: true});

const advancedResults = require("../middleware/advancedResults");
const {protect, authorize} = require("../middleware/auth");

router.use(protect);
router.use(authorize(["publisher","user"]));

router
    .route("/")
    .get(advancedResults(User), getUsers)
    .post(createUser);

router
    .route("/count")
    .get(getUsersCount);

router
    .route("/:id")
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

router
    .route("/:id/progress/:moduleId")
    .put(saveUserProgress);

router
    .route("/:id/activity/delete")
    .put(deleteUserProgress);

module.exports = router;
