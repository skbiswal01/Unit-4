const mongoose = require("mongoose");

const bookSchema = new mongoose.model({
    likes : {
        type : Number,
        require : true,
        default : 0
    },
    coverImage : [{
        type : String,
        require : true,
    }],
    content : {
        type : String,
        require : true,
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
        unique : true,
    },
    publicationID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "publication",
        required : true,
    },
    commentID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "comment",
        required : true,
    }
},{
 versionKey : false,
 timestamps: true
})

const Book = mongoose.model("book", bookSchema)
module.exports = Book;