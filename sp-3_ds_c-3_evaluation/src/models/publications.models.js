const mongoose = require("mongoose");

const publicationSchema = new mongoose.model({
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