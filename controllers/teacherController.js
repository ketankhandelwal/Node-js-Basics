let teacherController = {};
const details = require('../components/TeacherDetails')


teacherController.teacherDetails = function (req , res) {
    try {

        res.send(details)
        
    } catch (error) {

        console.log("Details not found" ,  error)
        
    }
}

teacherController.teacherInfo = function (req , res) {
    try {

        const detail = details.find(c => c.id === parseInt(req.params.id));
        if(!detail)res.status(404).send("ID not found");
        else{
            res.send(detail)
        }
        
    } catch (error) {
        console.error("ID not found" , error)
        
    }
}

module.exports = teacherController;