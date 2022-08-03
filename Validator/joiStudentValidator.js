let joiValidator = {};
const Joi = require("joi");


const paramSchema = Joi.object().keys({
  student_id: Joi.number().required()
});

const bodySchema = Joi.object({
  student_id: Joi.number().integer().required(),
  name: Joi.string().min(3),
  dob: Joi.date(),
  email: Joi.string().min(6).required().email(),
  branch_id: Joi.number(),
  course_ids: Joi.array().items(Joi.number()),
  created_at: Joi.date().timestamp(),
  updated_at: Joi.date().timestamp(),
  created_by: Joi.string().min(3),
  updated_by: Joi.string().min(3),
  status: Joi.string(),
});

joiValidator.validateBodySchema = function(req, res, next) {
  try {
    const result = bodySchema.validate(req.body);
   
    if(!result.error)
    next();
    
  } catch (error) {

    res.send(result.error)
    
  }
}


joiValidator.validateParamSchema = function (req, res, next) {

  try {
 
    const result = paramSchema.validate(req.params.student_id);
 
    if(!result.error){
   
    next();
    }
    
  } catch (error) {

    res.send(error);
    
  }

}

module.exports = joiValidator;
