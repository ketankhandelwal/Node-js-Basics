const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

const Teacher_details = require('../components/TeacherDetails');

router.get('/' , teacherController.teacherDetails);
router.get ('/:id' , teacherController.teacherInfo);





module.exports = router