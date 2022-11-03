const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin.controller")


router.get("/", adminController.renderAdmin)

router.delete("/:id", adminController.deleteAdmin)

module.exports = router