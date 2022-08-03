const express = require("express");
const app = express();
var moment = require("moment");
var morgan = require("morgan");
var studentRoute = require("./routes/studentRoute");
var teacherRoute = require("./routes/teacherRoute");
var courseRoute = require("./routes/courseRoute");
var homeRoute = require("./routes/homePageRoute.js");
var loginRoute = require('./routes/loginRoute');
var postRoute = require('./routes/postRoute');
var tokenRoute = require('./routes/tokenRoute')
const jwt = require("jsonwebtoken");
require("./configs/constants");
require("./configs/config");
app.use(morgan("dev"));
const auth = require("./middleware/auth");
const authenticateToken = require("./middleware/auth2");
app.use(express.json());
require("dotenv").config();

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');




app.use(HOME, homeRoute);
app.use(STUDENT, studentRoute);
app.use(TEACHER, teacherRoute);
app.use(COURSE, courseRoute);
app.use(POST,  postRoute);
app.use(LOGIN, loginRoute);
app.use(TOKEN , tokenRoute);

const option = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: "Student Record",
      version: '1.0.0',
      description: "A Student Data fetching API"
    },

    servers: [
      {
        url: "http://localhost:3000"
      }
    ],

   
  },
  apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(option);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

   


app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
