const path = require("Path");
const express = require("express");
const app = express();
const fixedaccount = require("../model/fixedaccount.model");
const router = express.Router();

router.post("/", async(req,res)=>{
    try {
        const Fixedacc=await fixedacc.find().lean().exec();
        return res.status(200).send(Fixedacc)
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})