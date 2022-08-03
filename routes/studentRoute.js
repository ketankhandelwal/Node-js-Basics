const express = require("express");
var apiAuth = require("../middleware/auth");
var apiMiddleware = require("../middleware/auth");
let studentValidator = require("../Validator/joiStudentValidator");
const Joi = require("joi");
var router = express.Router();
var studentController = require("../controllers/studentController");
const details = require("../components/StudentDetails");
const joiValidator = require("../Validator/joiStudentValidator");

/**
 * @swagger
 * components:
 *   schemas:
 *     student:
 *       type: object
 *       required:
 *         - student_id
 *         - email
 *         
 *       properties:
 *         student_id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         email:
 *           type: string
 *           description : Student unique email ID
 *        
 *       example:
 *         student_id: 506
 *         email: raju@gmail.com
 */



/**
 * @swagger
 * /students:
 *   get:
 *     summary: Returns the list of all the Students
 *     tags: [Student Data]
 *     responses:
 *       200:
 *         description: The list of the Students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *              
 */

router.get("/", studentController.studentDetails);


/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get the student by id
 *     tags: [Student Data]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Student id
 *     responses:
 *       200:
 *         description: The Student description by id
 *         contens:
 *           application/json:
 *             
 *       404:
 *         description: The book was not found
 */


router.get(
  "/:id",
 
  joiValidator.validateParamSchema,
  studentController.studentInfo
);


/**
 * @swagger
 * /students/signup:
 *  post:
 *    summary: Signup a student
 *    tags: [Student Data]
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/student'
 *    responses:
 *       200:
 *          description: Data entered successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/student'
 *       500:
 *          description: Inputs invalid
 */



router.post(
  "/signup",
  studentValidator.validateBodySchema,
  studentController.signUp
);

module.exports = router;
