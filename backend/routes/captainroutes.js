const express=require('express')
const router=express.Router()
const captainController=require('../controllers/captain.controller')
const {body}=require('express-validator')
const captainMiddleware=require('../middlware/auth.captain.middleware')
router.post('/register',[
    body('email').isEmail().withMessage('invalid Email '),
    body('fullname.firstname').isLength({min:3}).withMessage("it should be atleast 3 charcters long"),
    body('password').isLength({min:6}).withMessage("pasword must be greater than 6 digits"),
    body('vehicle.color').isLength({min:3}).withMessage("color must be greater than 3 charcaters"),
    body('vehicle.plate').isLength({min:3}).withMessage("the plate no should be more than 3"),
    body('vehicle.capacity').isInt({min:1}).withMessage("capacity should be more than 1 "),
    body('vehicle.vehicleType').isIn(["Car","Moto","Auto"]).withMessage("only 3 types are allowedn")
    
],captainController.registerCaptain)

router.post('/login',[
    body('email').isEmail().withMessage('invalid Email '),
    body('password').isLength({min:6}).withMessage("pasword must be greater than 6 digits")
],captainController.loginCaptain)

router.get('/profile',captainMiddleware.authUser,captainController.getCaptainProfile)

router.get('/logout',captainController.logoutCaptain)


module.exports=router