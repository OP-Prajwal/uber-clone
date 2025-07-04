const captainModel=require('../models/captain.model')

module.exports.createUser=async ({
    firstname,lastname,email,password,color,plate,capacity,vehicleType
})=>{
    if(!firstname || !email || !password ){
        throw new Error("all feilds are required ")
    }
    const captain=captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email:email,
        password:password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    return captain
}