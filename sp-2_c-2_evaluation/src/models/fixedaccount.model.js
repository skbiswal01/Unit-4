const mongoose =require ("mongoose");

    const fixedAccountSchema=new mongoose.Schema({
        account_number:{
            type:Number,
            require:true
        },balance:{
            type:Number,
            require:true

        },
        interestRate:{
            type:Number,
            require:true

        }
    },
    {

       versionKey : false,
       timestamps : true,

    })
    const fixedaccount =mongoose.model("fixedaccount",fixedAccountSchema);
    module.exports = fixedaccount;