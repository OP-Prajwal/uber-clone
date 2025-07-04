const dotenv=require('dotenv')
dotenv.config()
const blacklistModel=require('../models/blacklistToken.model')
const usermodel=require('../models/user.model')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')


module.exports.authUser=async(req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization.split(' ')[ 1 ]
    console.log("token ",token)
    if(!token){
        return res.status(401).json({message:"unauthorized no token "})
    }
const isBlackListed=await blacklistModel.find({token})
console.log(isBlackListed)

// if we use findOne then no need to do the Object.keys(myobj).length
if(Object.keys(isBlackListed).length!==0){
  return res.status(401).json({message:"unauthorized no token !!!"})
}


  try {
      const decoded=jwt.verify(token,process.env.JWT_SECRET)
     console.log("decoded ",decoded)
      const user=await usermodel.findById(decoded._id)
      
      req.user=user;
      return next()

  } catch (error) {
    res.status(401).json({message:"unauthorized "})
    console.log(error)
  }


}