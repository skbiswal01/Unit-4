const express = require("express");
const Student = require("../models/student.model.js");
const crudController = require("./crud.controller.js");
const app = express();

// -------------------------------------- Student Schema ------------------------------------ //



app.get("/students", async (req, res) => {
    try {
        const student = await Student.find({}).lean().exec()
        return res.status(200).send({ students: student });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Please Check Your Network!");
    }
});

app.post("",crudController.post(Student));



module.exports = app;