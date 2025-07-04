import React, { useContext } from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import { SocketContext } from '../context/SocketContext'
import { UserDataContext } from '../context/UserContext'
const ConfirmRide = (props) => {
  const {user} = useContext(UserDataContext);
  const { socket } = useContext(SocketContext);
  const vehicle=props.vehicleType
  console.log(vehicle)
  console.log("user is ",user)
  return (
    <div className='rounded-t-md'>
      <div className='flex flex-col  text-black  bg-white items-center justify-centre gap-3 absolute h-full'>
        <h1 className='text-2xl font-bold mt-2'>Book a Ride </h1>
        <div className='flex flex-col justify-center text-center '>
          <img src={logo} 
          className='p-4 border-2 rounded-2 border-black m-2' alt="" />
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
          <Link 
          onClick={()=>{
            props.setWaitDriver(true)
            // Emit ride request to server
            socket.emit('request-ride', {
              rideId: Date.now(), // temporary ride ID
              pickup: props.pickup,
              destination: props.destination,
              fare: props.fare?.[vehicle],
              vehicleType: vehicle,
              user:user
            });
            props.createRide(props.vehicleType)
          }}
          className='bg-green-400 relative  px-4 py-2 text-2xl font-semibold rounded-md mb-3'
          >Book a Ride </Link>
        </div>
      </div>
    </div>
  )
}

export default ConfirmRide