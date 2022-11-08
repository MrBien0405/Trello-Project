const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.get("/:id", userController.renderHomepage);

module.exports = router;
