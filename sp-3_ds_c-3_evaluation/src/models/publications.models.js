const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
    Name : {
        type : Number,
        require : true,
    },
   
},{
 versionKey : false,
 timestamps: true
})

const Publication = mongoose.model("publication", PublicationSchema)
module.exports = Publication;