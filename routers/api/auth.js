var express = require('express');
var router = express.Router();
const authController = require("../../controllers/auth");

router.post('/verifyToken', authController.verifyToken)
router.post('/verifyRoles', authController.verifyRoles);

module.exports = router;