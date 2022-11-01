const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.get("/", userController.renderHomepage);
router.get("/1", userController.renderBoard);

module.exports = router;