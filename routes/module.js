const express = require("express");
const router = express.Router();

const {protect, authorize} = require("../middleware/auth");
const {getModuleStatus} = require("../controllers/module");

router.use(protect);
router.use(authorize("publisher", "user"));

router
    .route("/:userId")
    .post(getModuleStatus);

module.exports = router;
