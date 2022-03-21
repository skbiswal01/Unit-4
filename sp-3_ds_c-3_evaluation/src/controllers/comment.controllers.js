const express = require("express");

const Comment = require("../models/comments.models");

const router = express.Router();

router.post("", async (req, res) =>{
    try{
        const comment = await Comment.create(req.body);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;