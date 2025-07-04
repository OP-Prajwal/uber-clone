const captainModel=require('../models/captain.model')
const blacklistModel=require('../models/blacklistToken.model')
const captainService=require('../services/captain.service')
const { validationResult } = require('express-validator')
module.exports.registerCaptain=async(req,res,next)=>{
    const errors=validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

  const {fullname,email,password,vehicle}=req.body
try {
    const captainExists=await captainModel.findOne({email})
   
    if(captainExists){
      res.status(401).json({message:"already exists "})
    }
  
    const hashedPassword=await captainModel.hashPassword(password)
    
    const captain=await captainService.createUser({
  
     firstname:fullname.firstname,
     lastname:fullname.lastname,
     email,
     password:hashedPassword,
     color:vehicle.color,
     plate:vehicle.plate,
     capacity:vehicle.capacity,
     vehicleType:vehicle.vehicleType
  
    })
  
   const token=captain.generateAuthToken()
  
  res.status(201).json({token,captain})
} catch (error) {
  console.log("error while registering ",error)
}

}

module.exports.loginCaptain=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
     
    const {email,password}=req.body

    //search for email 
    const captain=await captainModel.findOne({email:email}).select('+password')
     

   if(!captain){
    return res.status(401).json({message:"invalid email or password "})
     
   }

   const isMatch=await captain.comparePassword(password)

   if(!isMatch){
    return res.status(401).json({message:"invalid email or password "})
   }


   const token=captain.generateAuthToken()
   res.status(200).json({token,captain})

}

module.exports.getCaptainProfile=async(req,res,next)=>
    {
    res.status(200).json(req.captain)
    }
    
module.exports.logoutCaptain=async(req,res,next)=>{
        res.clearCookie('token')
        const token=req.cookies.token || req.headers.authorization.split(' ')[ 1 ]
      try {
         if(!token){
          res.status(401).json({message:"token not found "})
         }
          await blacklistModel.create({token})
      
      
      
          res.status(200).json({message:" user logout success  "})
      } catch (error) {
        console.log(error)
      }
    }