const mongoose=require("mongoose")

const masterSchema= new mongoose.Schema({
    balance:{
        type:Number,
        require:true
    },
    
},
    {
        versionKey:false,
        timestamps : true,
        
    }

    )

    const masteraccount =mongoose.model("masteraccount",masterSchema);
    module.exports = masteraccount;