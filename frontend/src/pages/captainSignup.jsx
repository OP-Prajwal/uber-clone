import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import logo from '../images/logo.png'

const CaptainSignup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [vehicleColor, setVehicleColor] = useState("")
  const [vehiclePlate, setVehiclePlate] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [vehicleCapacity, setVehicleCapacity] = useState("")

  const { setCaptain } = useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()

    const captainData = {
      fullname: {
        firstname,
        lastname
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType
      }
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (error) {
      console.log(error.response.data)
    }

    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleType('')
    setVehicleCapacity('')
  }

  return (
    <div className='p-7 h-screen justify-between flex flex-col'>
      <div>
        <img className='w-12 m-8' src={logo} alt="images" />
        <form onSubmit={submitHandler} className='mb-4'>
          <h3 className='mb-1 text-medium font-medium'>What's our Captain's name</h3>
          <div className='flex flex-row gap-2 mb-3'>
            <input
              className='bg-gray-200 rounded px-4 py-2 text-lg placeholder:xl w-1/2'
              required type="text" placeholder='firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <input
              className='bg-gray-200 rounded px-4 py-2 text-lg placeholder:xl w-1/2'
              required type="text" placeholder='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </div>
          <h3 className='mb-1 text-medium font-medium'>What's our Captain's email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-200 rounded px-4 py-2 w-full text-lg placeholder:xl'
            required type="email" placeholder='email@example.one' />
          <h3 className='mt-4 mb-1 text-medium font-medium'>Enter password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-gray-200 rounded px-4 py-2 w-full text-lg placeholder:xl'
            required type="password" placeholder='password' />
          <h3 className='mb-1 text-medium font-medium'>Vehicle info</h3>
          <div className='flex flex-row gap-4 mb-2'>
            <input
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className='bg-gray-200 rounded px-4 py-2 text-lg placeholder:xl w-1/2'
              placeholder='vehicle color'
              type="text" />
            <input
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder='vehicle plate'
              className='bg-gray-200 rounded px-4 py-2 text-lg placeholder:xl w-1/2'
              type="text" />
          </div>
          <div className='flex flex-row gap-4 mb-2'>
            <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder='Capacity'
              className='bg-gray-200 rounded px-4 py-2 text-lg placeholder:xl w-1/2'
              type="text" />
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className='bg-gray-200 rounded px-4 py-2 text-lg placeholder:xl w-1/2'>
              <option value="" disabled>Select type</option>
              <option value="Auto">Auto</option>
              <option value="Car">Car</option>
              <option value="Moto">Moto</option>
            </select>
          </div>
          <button className='bg-black font-semibold text-center text-white p-2 rounded mt-6 w-full'>Create new Account</button>
          <p className='font-semibold mt-2 text-center'>Already have an account?
            <Link to={'/captain-login'} className='text-blue-600'> login here</Link></p>
        </form>
      </div>
      <div>
        <p className='text-sm'>privacy policies of our website</p>
      </div>
    </div>
  )
}

export default CaptainSignup