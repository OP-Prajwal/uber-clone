const dotenv=require('dotenv')

dotenv.config()
const cookie=require('cookie-parser')
const express=require('express')
const cors=require('cors')
const app=express()
const db=require('./db')

db()
app.use(cors())

const userRoutes=require('./routes/user.routes')
app.use(cookie())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/users',userRoutes)


const captainRoutes=require('./routes/captainroutes')
app.use('/captains',captainRoutes)
const mapsRoutes=require('./routes/maps.routes')
app.use('/maps',mapsRoutes)


const RideRoutes=require('./routes/ride.route')
app.use('/rides',RideRoutes)
 
module.exports=app