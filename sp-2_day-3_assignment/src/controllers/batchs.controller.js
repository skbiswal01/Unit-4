const express = require("express");
const Batch = require("../models/batch.model.js")
const app = express();


// const router  = express.Router(); but then you have to change it everywhere

const crudController = require("./crud.controller.js");


// -------------------------------------- Batch Schema ------------------------------------ //



app.get("/batchs", async (req, res) => {
    try {
        const batch = await Batch.find({}).lean().exec()
        return res.status(200).send({ batchs: batch });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Please Check Your Network!");
    }
});

app.post("",crudController.post(Batch));


module.exports = app;