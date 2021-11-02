const express = require("express");
const router = express.Router();
const PageController = require("../Controller/PageController");

router.route("/").get(PageController.getIndexPage);
router.route("/about").get(PageController.getAboutPage);
router.route("/register").get(PageController.getRegisterPage);
router.route("/login").get(PageController.getLoginPage);

module.exports = router;
