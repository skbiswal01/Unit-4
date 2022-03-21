const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    body : {
        type : String,
        require : true,
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
    }
   
},{
 versionKey : false,
 timestamps: true
})

const User = mongoose.model("user", commentSchema)
module.exports = User;