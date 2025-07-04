import React from 'react'
import logo from '../images/logo.png'
import mapImage from '../images/map.jpg'
import userImg from '../images/user.webp'

const RidePopUp = ({ rideDetails, setConfirmRidePopupPanel, setRidePopupPanel, socket }) => {
  console.log(rideDetails)
  console.log("user is ",rideDetails?.user.fullname.firstname)
  const handleAccept = () => {





    socket.emit('ride-accepted', {
      rideId: rideDetails.rideId,
      driverDetails: {
        name: 'Prajwal',
        vehicle: 'blue Swift',
        plateNo: 'XX1234',
        rating: 5
      }
    })
    setConfirmRidePopupPanel(true)
  }

  if (!rideDetails) return null

  return (
    <div>
      <div className='flex flex-col gap-3 mt-3'>
        <h1 className='text-xl font-bold ml-2'>New Ride Available!</h1>
        <div className='items-center m-4 mt-5 flex flex-row justify-between gap-2 bg-yellow-300 p-3 rounded-md'>
          <div className='flex items-center gap-1 justify-center'>
            <img src={userImg} className='h-16 w-16 object-fill rounded-full' alt="" />
            <h2 className='ml-3 text-md font-bold'>{rideDetails?.user.fullname.firstname} {rideDetails?.user.fullname.lastname}</h2>
          </div>
          <h2>2.2 KM</h2>
        </div>
        <div className='flex flex-col items-start w-full gap-4'>
          <h1 className='text-xl'>From: {rideDetails.pickup}</h1>
          <h1 className='text-xl'>To: {rideDetails.destination}</h1>
          <h2 className='text-xl font-semibold'>Price: ₹{rideDetails.fare}</h2>
        </div>
        <div className='flex flex-col h-auto m-3 justify-center gap-3 mt-4 text-xl font-semibold'>
          <button 
            onClick={handleAccept}
            className='bg-green-500 px-5 py-3 rounded-md'
          >Accept</button>
          <button
            onClick={() => setRidePopupPanel(false)}
            className='bg-gray-300 px-5 py-3 rounded-md'
          >Ignore</button>
        </div>
      </div>
    </div>
  )
}

export default RidePopUp