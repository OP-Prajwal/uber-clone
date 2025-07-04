import React from 'react'
import logo from '../images/logo.png'
const VehiclePanel = (props) => {
console.log(props)
  return (
    <div>
       <div 
       
       className='bg-white h-6 flex justify-center '>
        
        <h1
        className='h-auto w-fit'
        onClick={()=>{
          props.setvehiclePanel(false)
  
         }}
        >h</h1></div>
          <h2 className='text-2xl mb-4 ml-4 font-semibold  '>Choose a vehicle</h2>
        <div onClick={()=>
        {
          props.setconfirmRide(true) 
         props.setvehicleType("Car")
        
        }
        }
        className='rounded-xl bg-gray-200 border-2 active:border-black duration-100  flex flex-row justify-between m-4 gap-4 items-center px-2 py-4'>
        <img className='w-32  ' src={logo} alt="" />
        <div>
          <h3 className='text-base font-bold'>Car <span className='text-sm font-medium'> capacity: <span className='font-bold'>4</span></span></h3>
         
         <h5 className='text-lg font-semibold'>2 min away</h5>
         <p className='font-serif text-sm'>affordable,compact rides </p>
        </div>
        <h2 className='text-xl font-semibold '>
          ₹{props.fare?.Car}</h2>
        </div>
        <div onClick={()=>{
          props.setconfirmRide(true)
          props.setvehicleType("Moto")
         
        }} className='rounded-xl border-2 bg-gray-200 active:border-black duration-100  flex flex-row justify-between m-4 gap-4 items-center px-2 py-4'>
        <img className='w-32  ' src={logo} alt="" />
        <div>
          <h3 className='text-base font-bold'>moto <span className='text-sm font-medium'> capacity: <span className='font-bold'>2</span></span></h3>
         
         <h5 className='text-lg font-semibold'>2 min away</h5>
         <p className='font-serif text-sm'>affordable,compact rides </p>
        </div>
        <h2 className='text-xl font-semibold'>
        ₹{props.fare?.Moto}</h2>
        </div>
        <div onClick={()=>{
          props.setconfirmRide(true)
          props.setvehicleType("Auto")
         
        }} className='rounded-xl bg-gray-200 border-2 active:border-black duration-100  flex flex-row justify-between m-4 gap-4 items-center px-2 py-4'>
        <img className='w-32  ' src={logo} alt="" />
        <div>
          <h3 className='text-base font-bold'>auto <span className='text-sm font-medium'> capacity: <span className='font-bold'>3</span></span></h3>
         
         <h5 className='text-lg font-semibold'>2 min away</h5>
         <p className='font-serif text-sm'>affordable,compact rides </p>
        </div>
        <h2 className='text-xl font-semibold'>
        ₹{props.fare?.Auto}</h2>
        </div>
    </div>
  )
}

export default VehiclePanel