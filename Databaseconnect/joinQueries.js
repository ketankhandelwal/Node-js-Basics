const { client } = require('./dbscript');
require('promise');


const query = `SELECT course_id,course_name , teacher_name FROM course LEFT OUTER JOIN teachers
ON course.teacher_id = teachers.teacher_id;`


client
  .query(query)
  .then(res => console.log(res.rows))
  .catch(e => console.error(e.message))

