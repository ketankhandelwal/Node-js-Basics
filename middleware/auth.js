let apiMiddleware = {}



apiMiddleware.apiAuth = function (req, res ,next) {
    if ( req.query.apiKey !== API_KEY){   // using query.
       return res.status(403).send("Unauthorized");
        
    } 
    
    next();
}

apiMiddleware.apiHeaderAuth = function  (req , res , next ) {

    if(req.headers.authorization !== "abc") {
        console.log(req.headers.auth)
     
      return  res.status(403).send("Unautho");
    }

    else {
  
        next();
    }
}

module.exports = apiMiddleware;


