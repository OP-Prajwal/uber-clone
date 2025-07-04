const express=require('express')
const router=express.Router()
const authMiddleware=require('../middlware/auth.middleware')
const Ridecontroller=require('../controllers/ride.controller')
const {body,query}=require('express-validator')

router.post('/create',
  body('pickup').isString().trim().notEmpty().withMessage("Invalid pickup address"),
  body('destination').isString().trim().notEmpty().withMessage("Invalid destination address"),
  body('vehicleType').isString().trim().notEmpty().withMessage("Invalid vehicle type"),
  authMiddleware.authUser,
  Ridecontroller.createRide
)

router.get('/get-fare',
  authMiddleware.authUser,
  query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
  query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
  Ridecontroller.getFare
)

module.exports=router