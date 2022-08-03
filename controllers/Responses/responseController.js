let Responses = {} 

Responses.sendSuccessResponses = function(res, message, data, code){
    let responseobj = {};
    responseobj['code'] = code ? code : 200;
    responseobj['data'] = data ? data : null;
    responseobj['message'] = message ? message : null;
   
    return res.status(200).send(responseobj);
}

Responses.sendFailureResponses = function (res , message , data  ,code) {

    let responseObj = {};
    responseObj['code'] = code ? code : 403;
    responseObj['data'] = data ? data : null;
    responseObj['message'] = message ? message : null;

   return res.send(responseObj);



}

module.exports = Responses