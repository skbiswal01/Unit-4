const express = require("express");

const book = require("../models/books.models");

const router = express.Router();

router.post("", async(req, res)=>{
    try{
      const books = await book.create(req.body);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;