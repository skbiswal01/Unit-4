const express = require("express")

const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const Todos = require("../models/todo.model");

router.post("", authenticate, async(res, req) => {
    req.body.user_id = req.userID;
    try{
       const todos = await Todos.create(req.body);
       return res.status(200).send(todos);
    }catch(err){
        return res.statusCode(400).send({message: err.message});
    }
});

router.get("", async(req, res) =>{
    try{
        const todos = await Todos.find();
        return res.status(200).send(todos);
    }catch(err){
        return res.status(400).send({message: err.message});
    }
})

router.get("/:id", async(req, res) =>{
    try{
        const todos = await Todos.find();
        return res.status(200).send(todos);
    }catch(err){
        return res.status(400).send({message: err.message});
    }
})

router.delete("/:id", authenticate, async (req, res) => {

    try{
        const todo = await todo.findByIdAndDelete(req.params.id);
        return res.status(200).send(todo);
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
});

router.patch("/:id", authenticate, async (req, res) => {

    try{
        const todo = await todo.findByIdAndUpdate(req.params.id, req.body, {
            new : true
        })
        return res.status(200).send(todo);
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
});

module.exports = router;