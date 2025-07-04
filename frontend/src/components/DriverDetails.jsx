import React from 'react'
import logo from '../images/logo.png'
const DriverDetails = () => {
  return (
    
    <div className="flex flex-col gap-4 h-screen items-center bg-white p-4 rounded-lg shadow-md">
    <h1 className='text-2xl font-semibold'>Driver Details</h1>
    <img
      src={logo}
      alt=''
      className="rounded-full h-20  mb-4"
    />

    <h2 className="text-lg font-semibold">Prajwal</h2>

    <p className="text-gray-600">Arriving in10 minutes</p> {/* Display ETA */}

    <div className="mt-2">
      <p className="text-sm">
        blue Swift - plateNo
      </p>
      <p className="text-sm">Rating: 5 ★</p> {/* Display rating */}
    </div>

    {/* Add a contact driver button or other relevant actions */}
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
      Contact Driver
    </button>
  </div>
  )
}

export default DriverDetails