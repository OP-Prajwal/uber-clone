import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import logo from '../images/logo.png'

const CaptainLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { setCaptain } = useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      email,
      password
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)
      if (response.status === 200) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (error) {
      console.log("error ", error)
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen justify-between flex flex-col'>
      <div>
        <img className='w-16 m-8' src={logo} alt="images" />
        <form onSubmit={submitHandler} className='mb-4 font-semibold'>
          <h3 className='mb-1 text-2xl'>What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-200 rounded px-4 py-2 w-full text-lg placeholder:xl'
            required type="email" placeholder='email@example.one' />
          <h3 className='mt-4 mb-1 text-2xl'>Enter password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-gray-200 rounded px-4 py-2 w-full text-lg placeholder:xl'
            required type="password" placeholder='password' />
          <button className='bg-black font-semibold text-center text-white p-2 rounded mt-6 w-full'>Login</button>
          <p className='font-semibold mt-2 text-center'>Register as a captain?
            <Link to={'/captain-signup'} className='text-blue-600'> Create New Account</Link></p>
        </form>
      </div>
      <div>
        <Link to={'/user-login'}
          className='bg-orange-400 justify-center flex items-center font-semibold text-2xl text-center text-white p-2 rounded w-full'>
          Sign in as a user
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin