import React from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
const Start = () => {
  return (
    <div>
        <div className='bg[url()] pt-5  h-screen w-full flex flex-col justify-between bg-cover'>
            <img className=' w-16 m-8' src={logo} alt="images" />
            <div className='bg-yellow-50 py-5 px-4 font-bold flex flex-col items-center'>
                <h2 className='text-3xl pb-4'>Get Started with Uber </h2>
                <Link to={'/user-login'} className='flex items-center justify-center  w-full bg-black text-white py-3 rounded-2xl'>Continue</Link>
            </div>

        </div>
    </div>
  )
}

export default Start