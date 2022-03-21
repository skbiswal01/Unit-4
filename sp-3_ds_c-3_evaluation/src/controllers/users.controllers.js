const express = require("express");
const User = require("../models/users.models");
const { body, validationResult } = require("express-validator");
const router  = express.Router();

router.post("/",
body("firstName")
.trim()
.not()
.isEmpty()
.withMessage("firstname cannot be empty")
.isLength({min : 3, max : 30})
.withMessage("firstname msut be atleast 3 character"),
body("lastName")
.trim()
.isLength({min : 3, max : 30})
.withMessage("firstname msut be atleast 3 character"),
body("age")
.not()
.isEmpty()
.withMessage("firstname cannot be empty")
.isNumeric()
.withMessage("age must be a number between 1 and 150")
.custom((value)=>{
    if(value < 1 || value > 150){
        throw new Error("incorrect age");
    }

    return true;
}),
body("email")
.isEmail()
.custom(async (value) => {
    const user = await User.findOne({email : value});

    if(user) {
        throw new Error("email already exists");
    }
    return true;
}),
async(req, res) => {
    try{
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
         return res.status(400).send({erros: errors.array()});
      }
      const user = await User.create(req.body);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
})


router.get("", async(req, res)=>{
    try{
      const page = req.query.page || 1;
      const pagesize = req.query.pagesize || 10;
      const skip = (page - 1) * pagesize;
      const users = await User.find().skip(skip).limit(pagesize).lean().exec();

    
    }catch(err){
        console.log(err);
    }
})
module.exports = router;