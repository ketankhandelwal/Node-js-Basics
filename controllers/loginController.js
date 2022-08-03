const jwt = require("jsonwebtoken");




let loginController = {}
let refreshTokens = [];

loginController.login = function (req , res) {

    try {
        let body = req.body;
        const username = body.username
        console.log(username)
  
       

        const accessToken = generateAuthToken(username);
        const refreshToken = jwt.sign(username, process.env.REFRESHTOKEN)
      
        res.json({accessToken:accessToken, refreshToken:refreshToken});
      
        
    } catch (error) {
        console.log(error)
        
    }

   
}


function generateAuthToken(user){
    return jwt.sign({user:user}, process.env.ACCESSTOKEN, {expiresIn: '20s'});
}

loginController.token = function(req, res){

    const token = req.body.token;
    if(token == null) res.status(404).send("No Token found");
    refreshTokens.push(token)

    if(!refreshTokens.includes(token)) return res.sendStatus(403);
    jwt.verify(token, process.env.REFRESHTOKEN, (err,  user) => {

        if(err){
            return res.sendStatus(403);
        }

        else{
            accessToken = generateAuthToken(user);
            res.send({accessToken : accessToken});
        }

    })



}




module.exports = loginController