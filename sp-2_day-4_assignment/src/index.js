const express = require("express");

const userController = require("./controllers/usercontroller");

const app = express();

app.use(express.json());

app.use("/users", userController);

module.exports = app;


