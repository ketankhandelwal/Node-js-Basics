// let studentValidator = {}
// const Joi = require('joi')



// studentValidator.studentSignUpSchema = Joi.object.keys({
//   student_id: Joi.number().integer().required(),
//   name: Joi.string().min(3),
//   dob: Joi.date(),
//   email: Joi.string() .min(6) .required() .email(),
//   branch_id: Joi.number(),
//   course_ids: Joi.array().items(Joi.number()),
//   created_at: Joi.date().timestamp(),
//   updated_at: Joi.date().timestamp(),
//   created_by: Joi.string().min(3),
//   updated_by: Joi.string().min(3),
//   status: Joi.string(),
// });





  module.exports = studentValidator;
