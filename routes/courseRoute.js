const express = require('express');
const router = express.Router();
const details = require( '../components/CourseDetails');
const courseController = require('../controllers/courseController');

router.get('/' , courseController.courseDetails);
router.get('/:id'  , courseController.courseInfo)




module.exports = router