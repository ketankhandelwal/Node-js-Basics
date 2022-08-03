let homeController = {}


homeController.homeInfo = function (req , res) {
    try {
        res.send("Welcome to my Database");

        
    } catch (error) {

        console.log("Nothing to display at Home" , error);
        
    }
}


module.exports = homeController