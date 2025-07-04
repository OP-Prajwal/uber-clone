const express=require('express')
const router=express.Router()
const {body}=require('express-validator')
const userController=require('../controllers/user.controller')
const authMiddleware=require('../middlware/auth.middleware')


router.post('/register',[
    body('email').isEmail().withMessage('invalid Email '),
    body('fullname.firstname').isLength({min:3}).withMessage("it should be atleast 3 charcters long"),
    body('password').isLength({min:6}).withMessage("pasword must be greater than 6 digits")
    
],userController.registeruser)


router.post('/login',[
    body('email').isEmail().withMessage('invalid Email '),
    body('password').isLength({min:6}).withMessage("pasword must be greater than 6 digits")
],userController.login)

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)

router.get('/logout',userController.logoutUser)

module.exports=router