const mapsService=require('../services/maps.service')
const express=require('express')
const axios=require('axios')
const { validationResult } = require('express-validator')
module.exports.getAddressCoordinate=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }


    const {address}=req.query
  try{
     const coordinates=await mapsService.getAddressCoordinate(address)
     res.status(200).json(coordinates)




  }catch(error){

    res.status(404).json({message:"cordinates not found"})
    console.log(error)
  }
  }


  module.exports.getDistanceTime=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    
    const {origin,destination}=req.query
    try{
      
      
      const distanceTime=await mapsService.getDistanceTime(origin,destination)
      
      res.status(200).json(distanceTime)



   }catch(error){
    console.log(error)
   }

  }

  module.exports.getSuggestions=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
   const {input}=req.query


   try{
    const suggestions=await mapsService.getSuggestions(input)
    res.status(200).json(suggestions)
   }catch(error){
    console.log(error)
    res.status(404).json({message:"suggestions not found"})
   }

  }
  