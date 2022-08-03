const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');



router.post('/' , loginController.token);

module.exports = router;