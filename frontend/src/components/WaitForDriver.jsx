import React from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
const WaitForDriver = (props) => {



  const vehicle=props.vehicleType
  console.log(vehicle)
  console.log("user is ",props.user)
  return (
    <div className='rounded-t-md '>
    <div className='flex flex-col  text-black  bg-white items-center justify-centre gap-3 absolute h-full'>
     <h1 className='text-2xl font-bold mt-2'>Looking for Driver</h1>
    <div className='flex flex-col justify-center text-center '>
    <img src={logo} 
    className='p-4 border-2 rounded-2 border-black m-4' alt="" />
    <h1 className='font-bold text-xl'>{props.vehicleType}</h1>
    <div className='flex flex-col justify-start items-start ml-6 text-lg gap-2 mt-1 font-semibold'>
      <h1>Pickup : {props.pickup}</h1>
      <h1>destination :{props.destination}</h1>
      <h1
      className='font-bold'
      >Fare :₹{props.fare?.[vehicle]} </h1>
     </div>
    </div>
  <div className='flex '>
  
  </div>
  
     </div>
  </div>
  )
}

export default WaitForDriver