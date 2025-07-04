const rideService=require('../services/ride.service')
const usermodel=require('../models/user.model')
const { validationResult } = require('express-validator');
const jwt=require('jsonwebtoken')
module.exports.createRide=async(req,res,next)=>{

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
   const {pickup,destination,vehicleType}=req.body
   const token=req.headers.authorization.split(' ')[1]
   console.log("the id of user is ",token)
   const decodedId=jwt.decode(token)
   const user=await usermodel.findById(decodedId._id)
  
  
  try {
      const ride=await rideService.createRide({ user:decodedId._id,pickup,destination,vehicleType } )
      res.status(201).json(ride)
  } catch (error) {
    console.log(error)
  }





}

module.exports.getFare=async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);
    } catch (err) {
        return res.status(500).json({ message: "error while getting fare" });
    }



}