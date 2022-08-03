const express = require('express');
const router = express.Router();
const details = require( '../components/CourseDetails');
const homeController = require('../controllers/homeController');

router.get('/' , homeController.homeInfo )


module.exports = router