const express = require("express");
const usersController = require("./controllers/users.controllers");
const bookController = require("./controllers/book.controllers");
const commentController = require("./controllers/comment.controllers");
const app = express();
app.use(express.json());
app.use("/users", usersController);
app.use("/book", bookController);
app.use("/comment", commentController);
module.exports = app;