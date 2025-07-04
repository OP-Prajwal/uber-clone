import React from 'react'
import logo from '../images/logo.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'
import { useContext } from 'react'
const UserLogin =  () => {
  
  const [email,setmail] = useState("")
const [password,setpassword] = useState("")


const navigate=useNavigate()



const { setuser } = useContext(UserDataContext)

const SubmitHandler=async (e)=>{
  e.preventDefault()
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, {
      email,
      password
    })

    if(response.status === 200) {
      const { user, token } = response.data
      setuser(user) // This will now also save to localStorage
      localStorage.setItem('token', token)
      navigate('/home')
    }
  } catch (error) {
    console.error('Login failed:', error)
  }
}





  return (
    <div className='p-7 h-screen justify-between flex flex-col'>
     
<div>
<img className=' w-16 m-8' src={logo} alt="images" />
<form
onSubmit={(e)=>{SubmitHandler(e)}}
className='mb-4  font-semibold   ' action="">
        <h3
        className='mb-1 text-2xl'
        >what's ur email </h3>
        <input 
        value={email}
        onChange={(e)=>setmail(e.target.value)}
        className='bg-gray-200 rounded px-4 py-2 w-full text-lg placeholder:xl'
        required type="email" placeholder='email@example.one' />
        <h3 
        className='mt-4 mb-1 text-2xl'
        >Enter password </h3>
        <input 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
         className='bg-gray-200 rounded px-4 py-2 w-full text-lg placeholder:xl'
        required type="password" placeholder='password' />
        <button
        className='bg-black font-semibold text-center text-white p-2 rounded  mt-6 w-full '
        >Login</button>
       <p className='font-semibold mt-2 text-center'>new here?  
        
        <Link 
        to={'/user-signup'}
        className='text-blue-600' > Create New Account(user)</Link></p>

      </form>
</div>
<div>
  <Link to={'/captain-login'}
   className='bg-green-600 justify-center  flex items-center font-semibold text-2xl text-center
    text-white p-2 rounded w-full '
  >Sign in as a captain</Link>
</div>
    </div>
  )
}

export default UserLogin