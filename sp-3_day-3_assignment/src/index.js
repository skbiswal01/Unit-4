const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller")
const postController = require("./controllers/Post.controller")

const {register,login} = require("./controllers/auth.controller")
const app = express();

app.use(express.json());


app.use("/users", userController)

app.post("/register", register)

app.post("/login", login)

app.use("/posts", postController)

module.exports = app;