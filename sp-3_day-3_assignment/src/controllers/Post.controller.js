
const express = require("express")

const router = express.Router();
const authenticate = require("../middlewares/authenticate")
const Post = require("../models/Post.models");

router.post("", authenticate, async (req, res) => {

    req.body.user_id = req.userID;
    try{
        const Post = await Post.create(req.body)
        return res.status(200).send(Post)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
})

router.get("", async (req, res) => {
    try{
        const Post = await Post.find()
        return res.status(200).send(Post)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

module.exports = router;