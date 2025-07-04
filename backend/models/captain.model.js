const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const captainSchema=new mongoose.Schema({


fullname:{
    firstname:{
        type:String,
        minlength:[3,"firstname must be at least 3 charcters long "],
        required:true
    },
    lastname:{
        type:String,
        minlength:[3,"firstname must be at least 3 charcters long "],
      
    }
},
email:{
    type:String,
    minlength:3,
    required:true,
    unique:true
},
password:{
    type:String,
  select:true,
    required:true,
    
},
socketid:
{
 //live tracking
 type:String,

},
status:{
type:String,
enum:["active","inactive"],
default:"inactive"
},
vehicle:{
  color:{
    type:String,
    required:true,
   
  },
  plate:{
    type:String,
    required:true,
    
  },
  capacity:{
    type:Number,
    required:true,
   
  },
  vehicleType:{
    type:String,
    required:true,
    enum:["Car","Moto","Auto"]
  }
},
location:{
    lat:{
        type:Number
    },
    lng:{
        type:Number
    }
},
isLoading:{
  type:String,
  default:""
},

},{timestamps:true},


)

captainSchema.methods.generateAuthToken= function (){
    const token= jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token
}

captainSchema.methods.comparePassword=async function (password){
return await bcrypt.compare(password,this.password)
}

captainSchema.statics.hashPassword=async function (password) {
    return await bcrypt.hash(password,10)
}

const captainModel=mongoose.model("captainModel",captainSchema)

module.exports=captainModel