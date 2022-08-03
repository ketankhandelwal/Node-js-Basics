const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authenticateToken = require('../middleware/auth2');


router.get('/' , authenticateToken.authenticate, postController.post);

module.exports = router;