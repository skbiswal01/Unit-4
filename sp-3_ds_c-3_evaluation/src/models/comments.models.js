const mongoose = require("mongoose");

const bookSchema = new mongoose.model({
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

const User = mongoose.model("user", userSchema)
module.exports = User;