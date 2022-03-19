const express = require("express");
const Submission = require("../models/submission.model.js")
const app = express();
const crudController = require("./crud.controller.js");
// -------------------------------------- Submission Schema ------------------------------------ //



app.get("/submissions", async (req, res) => {
    try {
        const submission = await Submission.find({}).lean().exec()
        return res.status(200).send({ submissions: submission });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Please Check Your Network!");
    }
});

app.post("",crudController.post(Submission));


module.exports = app;