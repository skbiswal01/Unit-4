const express = require("express");


const usersController =require("./controllers/users.controller.js")
const studentsController =require("./controllers/students.controller.js")
const batchsController =require("./controllers/batchs.controller.js")
const submissionsController =require("./controllers/submission.controller.js")
const evaluationsController =require("./controllers/evaluation.controller.js");
const { application } = require("express");

const app = express();

app.use(express.json());

app.use("/users",usersController)
app.use("/students",studentsController)
app.use("/batchs",batchsController)
app.use("/submissions",submissionsController)
app.use("/evaluations",evaluationsController)

module.exports = app;