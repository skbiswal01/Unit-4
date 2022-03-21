const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
       firstName : {
           type : String,
           require : true,
       },
       lastName : {
           type : String,
           require : false,
       },
       age : {
           type : Number,
           require : true
       },
       email : {
           type : String,
           require : true,
           unique : true
       },
       profileImages : [{
           type : String,
           require : true
       }],

},{
    versionKey : false,
    timestamps: true
})

const User = mongoose.model("user", userSchema)
module.exports = User;