const jwt = require("jsonwebtoken");
let authenticateToken = {}



authenticateToken.authenticate =  function (req , res , next) {

    const authToken = req.headers['authorization']
    
    console.log(authToken);
 
    const token = authToken 
   
    console.log(token)
     
    if(token == null) return res.status(401).send("Token Invaid");
 
    jwt.verify(token , process.env.ACCESSTOKEN , (err , user) => {
 
       if(err) return res.sendStatus(403);
 
       req.user = user ;
       console.log(user)
       next();
 
    })
    next();
 }

 module.exports = authenticateToken