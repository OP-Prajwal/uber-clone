const express=require('express')
const router=express.Router()
const Auth=require('../middlware/auth.middleware')

const { query } = require('express-validator')
const mapsController=require('../controllers/maps.controller')
const { get } = require('mongoose')
router.get('/get-coordinates',
    query('address').notEmpty().withMessage('Address is required')

    ,Auth.authUser,mapsController.getAddressCoordinate)

router.get('/get-distance',
query('origin').notEmpty().withMessage("origin is empty "),
query('destination').notEmpty().withMessage("origin is empty ")

,Auth.authUser,mapsController.getDistanceTime)


router.get('/get-suggestions',
    query('input').notEmpty().withMessage("input is empty "),
Auth.authUser,mapsController.getSuggestions
)

module.exports=router