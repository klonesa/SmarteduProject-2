const express = require("express");
const router = express.Router();
const PageController = require("../Controller/PageController");

router.route("/").get(PageController.getIndexPage);
router.route("/about").get(PageController.getAboutPage);
module.exports = router;
