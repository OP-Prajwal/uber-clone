import React from 'react'
import {useState} from 'react'
import crypto from 'crypto'
import userImg from '../images/user.webp'
import { Link } from 'react-router-dom'
const ConfirmRidePopup = (props) => {
const [otp, setotp] = useState('')
const optVerify=(e)=>{
  const verify=crypto.
  e.preventDefault()
 
}





  return (
   <div>
          <div className=' flex flex-col gap-3 mt-3'>
   <h1 className='text-xl font-bold  ml-2'>Confirm this ride to Start!</h1>
   <div className='items-center m-4 mt-1  flex flex-row  justify-between gap-2 bg-yellow-300 p-3 rounded-md'>
   <div className='flex items-center gap-1 justify-center  '>
   <img src={userImg} className='h-16 w-16  object-fill rounded-full' alt="" />
   <h2 className='ml-3 text-md font-bold'>{props.rideDetails?.user.fullname.firstname} {props.rideDetails?.user.fullname.lastname}</h2>
   </div>
   <h2 >2.2 KM</h2>
   
   </div>
             <div className='flex flex-col justify-center items-center m-4'>
             
             <div className='flex flex-col items-start w-full gap-4'>
           <h1 className='text-xl'>{props.rideDetails?.pickup}</h1>
           <h1 className='text-xl' >{props.rideDetails?.destination}</h1>
           <h2 className='text-xl font-semibold'>{props.rideDetails?.price}</h2>
             </div>
   
            </div>
            
          <div className='flex flex-col h-auto m-3  justify-center gap-3 mt-4 text-xl font-semibold'>
          <input
          value={otp}
          onChange={(e)=>{
            setotp(e.target.value)
          }}
          className='h-12 border-2 bg-gray-200 rounded-md mb-4'
          type="number" placeholder='  Enter OTP ' />         
          <Link 
          onClick={(e)=>{
             optVerify(e)          
          }}
         to='/captain-riding'
          className='bg-green-500 px-5 py-3 rounded-md flex justify-center'
          >Confirm </Link>
             <button
           onClick={()=>{
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
           }}
             className='bg-red-500 text-white px-5 py-3 rounded-md'
             >Cancel </button>
             
          </div>
             
   
   
       </div>
    </div>
  )
}

export default ConfirmRidePopup