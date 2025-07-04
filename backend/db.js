const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose')
const MONGO_URL=process.env.MONGO_URL
const MONGO_NAME=process.env.MONGO_NAME

    const dbConnection=async()=>{
      
        await mongoose.connect(MONGO_URL)
       .then(()=>{
        console.log("connected to db")
     }).catch((err)=>console.log(err))
    }

module.exports=dbConnection