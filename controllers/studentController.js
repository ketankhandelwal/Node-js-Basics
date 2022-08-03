let studentController = {};
const details = require("../components/StudentDetails");
const studentSchema = require("../Databaseconnect/tables/studentSchema");

const Responses = require("./Responses/responseController");

studentController.studentDetails = function (req, res) {
  try {
    res.send(details);
  } catch (error) {
    console.log("Details not found", error);
  }
};

studentController.studentInfo = async function (req, res) {
  try {
    await studentSchema
      .findOne({
        where: {
          student_id: req.params.id,
        },
      })
      .then((data) => {
        if(data.student_id !== null)
        res.status(200).send(data);

        else{
          res.status(403).send("Please enter valid Student ID")
        }
      })
      .catch((err) => {
        res.status(403).send("Please enter valid Student ID");
      });
  } catch (error) {
    console.log("Not found");
  }
};

studentController.signUp = function (req, res) {
  let body = req.body,
    studentObj = {};

  studentObj["student_id"] = body.student_id
    ? body.student_id
    : Object.keys(studentObj).length + 1;
  studentObj["name"] = body.name ? body.name : null;
  studentObj["dob"] = body.dob ? body.dob : null;
  studentObj["email"] = body.email ? body.email : null;
  studentObj["branch_id"] = body.branch_id ? body.branch_id : null;
  studentObj["course_ids"] = body.course_ids ? body.course_ids : null;
  studentObj["created_at"] = body.created_at ? body.created_at : null;
  studentObj["updated_at"] = body.updated_at ? body.updated_at : null;
  studentObj["created_by"] = body.created_by ? created_by : null;
  studentObj["updated_by"] = body.updated_by ? updated_by : null;
  studentObj["status"] = body.status ? body.status : null;

  async function insertData() {
    await studentSchema
      .create(studentObj)
      .then(() => {
        Responses.sendSuccessResponses(
          res,
          ["Signed Up success"],
          studentObj,
          200
        );
      })
      .catch((err) =>
        Responses.sendFailureResponses(res, [err.message], studentObj, 403)
      );
  }
  insertData();
};

module.exports = studentController;
