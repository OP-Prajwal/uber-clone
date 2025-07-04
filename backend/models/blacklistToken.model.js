const mongoose=require('mongoose')

const BlacklisttokenSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
     type:Date,
     default:Date.now,
     expires:86400 //24 hrs 
    }
});

const blacklistModel=mongoose.model("blacklistToken",BlacklisttokenSchema)

module.exports=blacklistModel