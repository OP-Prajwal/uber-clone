import React from 'react'

import logo from '../images/logo.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios' //used to transfer data to backend
import {UserDataContext} from '../context/UserContext'
import { useContext } from 'react'
const UserSignup = () => {

  const [email,setmail] = useState("")
  const [password,setpassword] = useState("")
  const [firstname,setfirstname] = useState("")
  const [lastname,setlastname] = useState("")
// backend and frontend connection using navigate hook 
const navigate=useNavigate()

const {user,setUser}=useContext(UserDataContext)


  const SubmitHandler=async (e)=>{
    e.preventDefault()
  // data to backend
   const newUser={
    fullname:{
      firstname:firstname,
      lastname:lastname
     },
      email:email,
      password:password,
   }
   console.log(import.meta.env.VITE_BASE_URL)
   const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
 
   if(response.status===201){
    const data=response.data
    setUser(data.user)
    //sometimes if the user reloads then the data is not found so we get token and store it in the local storage and use it for logging
     localStorage.setItem('token',data.token)
    navigate('/home')
   }
   setmail('')
   setpassword('')
   setfirstname('')
   setlastname('')
  }
  return (
    <div className='p-7 h-screen justify-between flex flex-col'>
     
<div>
<img className=' w-16 m-8' src={logo} alt="images" />
<form
onSubmit={(e)=>{SubmitHandler(e)}}
className='mb-4    ' action="">


  <h3 className='mb-1 text-2xl font-medium' >what's ur name </h3>
  <div className='flex flex-row gap-2 mb-3 '>
  <input 
        
        className='bg-gray-200 rounded px-4 py-2  text-lg placeholder:xl w-1/2'
        required type="text" placeholder='firstname' value={firstname} onChange={(e)=>setfirstname(e.target.value)} />

<input 
       
        
        className='bg-gray-200 rounded px-4 py-2  text-lg placeholder:xl w-1/2'
        required type="text" placeholder='lastname' value={lastname} onChange={(e)=>{setlastname(e.target.value)}} />
  </div>
        <h3
        className='mb-1 text-2xl font-medium'
        >what's ur email </h3>
        <input 
        value={email}
        onChange={(e)=>setmail(e.target.value)}
        className='bg-gray-200 rounded px-4 py-2 w-full text-lg placeholder:xl'
        required type="email" placeholder='email@example.one' />
        <h3 
        className='mt-4 mb-1 text-2xl font-medium'
        >Enter password </h3>
        <input 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
         className='bg-gray-200 rounded px-4 py-2 w-full text-lg placeholder:xl'
        required type="password" placeholder='password' />
        <button
        className='bg-black font-semibold text-center text-white p-2 rounded  mt-6 w-full '
        >Create new Account</button>
       <p className='font-semibold mt-2 text-center'>Already have an account?  
        
        <Link 
        to={'/user-login'}
        className='text-blue-600' > login here</Link></p>

      </form>
</div>
<div>
 <p className='text-sm'> privacy policies of our website </p>
</div>
    </div>
  )
}
  
export default UserSignup