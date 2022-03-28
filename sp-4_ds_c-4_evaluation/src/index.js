const express = require("express");
const userController = require("./controllers/user.controller");
const todosController = require("./controllers/todos.controller");
const {register, login, generateToken} = require("./controllers/auth.controller");
const app = express();
app.use(express.json());
app.use("/users", userController);
app.post("/register", register);
app.post("/login", login);
app.use("/todos", todosController);

module.exports = app;