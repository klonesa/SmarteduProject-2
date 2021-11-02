const express = require("express");
const router = express.Router();
const courseController = require("../Controller/courseController");

router.route("/").post(courseController.createCourse);
router.route("/").get(courseController.getAllCourse);
router.route("/:slug").get(courseController.getCourse)

module.exports = router;
