const usermodel=require('../models/user.model')

module.exports.createUser=async ({
    firstname,lastname,email,password
})=>{
    if(!firstname || !email || !password ){
        throw new Error("all feilds are required ")
    }
    const user=usermodel.create({
        fullname:{
            firstname,
            lastname
        },
        email:email,
        password:password
    })
    return user
}