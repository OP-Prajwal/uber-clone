import React, { useContext } from 'react'
import logo from '../images/logo.png'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext)
  console.log(captain)

  return (
    <div>
      <div className='flex flex-col fixed bg-white w-full h-2/5 bottom-0 gap-3 '>
        <div className='flex flex-row mt-4 justify-between items-center'>
          <div className='flex flex-row justify-center items-center'>
            <img className='h-16 w-16 rounded-full ml-4' src={logo} alt="" />
            <h1>{captain?.fullname?.firstname} {captain?.fullname?.lastname}</h1>
          </div>
          <div className='mr-5'>
            Price earned
          </div>
        </div>
        <div className='flex flex-row justify-between ml-4 mr-4 items-center'>
          <div className='flex items-center flex-col bg-gray-200 rounded-md p-2'>
            <h1>10.2</h1>
            <h2>Driven time</h2>
          </div>
          <div className='flex items-center flex-col bg-gray-200 rounded-md p-2'>
            <h1>10.2</h1>
            <h2>Max speed</h2>
          </div>
          <div className='flex items-center flex-col bg-gray-200 rounded-md p-2'>
            <h1>10.2</h1>
            <h2>Total bookings</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptainDetails