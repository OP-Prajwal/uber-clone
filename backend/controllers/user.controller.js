const { validationResult } = require('express-validator')
const captainModel=require('../models/captain.model')
const usermodel=require('../models/user.model')
const userService=require('../services/user.services')
const blacklistToken=require('../models/blacklistToken.model')

module.exports.registeruser=async(req,res,next)=>{
    const errors=validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

  const {fullname,email,password}=req.body
  const userExists=await captainModel.findOne({email})
 
  if(userExists){
    res.status(401).json({message:"already exists "})
  }
  try {
    const hashedPassword=await usermodel.hashPassword(password)
  
  const user=await userService.createUser({

   firstname:fullname.firstname,
   lastname:fullname.lastname,
   email,
   password:hashedPassword

  })

 const token=user.generateAuthToken()

res.status(201).json({token,user})

  } catch (error) {
    console.log("error while registering ",error)
  }
}

module.exports.login=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
     
    const {email,password}=req.body

    //search for email 
    const user=await usermodel.findOne({email:email}).select('+password')
     

   if(!user){
    return res.status(401).json({message:"invalid email or password "})
     
   }

   const isMatch=await user.comparePassword(password)

   if(!isMatch){
    return res.status(401).json({message:"invalid email or password "})
   }


   const token=user.generateAuthToken()
   res.status(200).json({token,user})

}

module.exports.getUserProfile=async(req,res,next)=>
{
res.status(200).json(req.user)
}

module.exports.logoutUser=async(req,res,next)=>{
    res.clearCookie('token')
    const token=req.cookies.token || req.headers.authorization.split(' ')[ 1 ]
   if(!token){
    res.status(401).json({message:"token not found "})
   }
   try {
     await blacklistToken.create({token})
   } catch (error) {
    console.log("error while inserting in blacklist ",error)
   }



    res.status(200).json({message:" user logout success  "})
}