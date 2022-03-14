const express = require("express");

const fixedController = require("./controllers/fixedcontroller");
const masterController = require("./controllers/mastercontroller");
const savingController = require("./controllers/savingcontroller");

const app = express();
app.use(express.json());


app.use("/fixed", fixedController); // /users/abcd/fkhsdkfh/fkhsdk
app.use("/master",  masterController);
app.use("/saving", savingController);

module.exports = app;
