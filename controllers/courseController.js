let courseController = {};
const details = require('../components/CourseDetails')


courseController.courseDetails = function (req , res) {
    try {

        res.send(details)
        
    } catch (error) {

        console.log("Details not found" ,  error)
        
    }
}

courseController.courseInfo = function (req , res) {
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

module.exports = courseController;

