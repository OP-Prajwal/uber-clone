import React from 'react'
import userImg from '../images/user.webp'
import { Link } from 'react-router-dom'
const Finish = () => {
  return (
    <div>
    <div className=' flex flex-col gap-3 mt-3'>
<h1 className='text-xl font-bold  ml-2'>Finish this ride !</h1>
<div className='items-center m-4 mt-1  flex flex-row  justify-between gap-2 bg-yellow-300 p-3 rounded-md'>
<div className='flex items-center gap-1 justify-center  '>
<img src={userImg} className='h-16 w-16  object-fill rounded-full' alt="" />
<h2 className='ml-3 text-md font-bold'>User</h2>
</div>
<h2 >2.2 KM</h2>

</div>
       <div className='flex flex-col justify-center items-center m-4'>
       
       <div className='flex flex-col items-start w-full gap-4'>
     <h1 className='text-xl'>From Location </h1>
     <h1 className='text-xl' >To Location </h1>
     <h2 className='text-xl font-semibold'>Price</h2>
       </div>

      </div>
      
    <div className='flex flex-col h-auto m-3  justify-center gap-3 mt-4 text-xl font-semibold'>
         
    <Link 
   to='/captain-riding'
   
    className='bg-green-500 px-5 text-white py-3 rounded-md flex justify-center'
    >Finish Ride </Link>
  
       
    </div>
       


 </div>
</div>
  )
}

export default Finish