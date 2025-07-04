import React, { useRef } from 'react'
import mapImage from '../images/map.jpg'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useState } from 'react'
import Finish from '../components/FInish'
const CaptainRiding = () => {
    const [finish, setfinish] = useState(false)
    const Finishref=useRef(null)

    useGSAP(function(){
        if(finish){
          gsap.to(Finishref.current,{
            transform:'translateY(0)'
          })
         
        }else{
          gsap.to(Finishref.current,{
            transform:'translateY(100%)'
          })
        }
        
        },[finish])





  
  return (
    <div>
        <div className='w-screen h-screen overflow-hidden '>
            <img className='w-screen h-full ' src={mapImage} alt="" />
        </div>
        <div className='line h-1 w-5 '></div>
        <div className=' h-1/5 rounded-t-md  bg-yellow-300 w-full bottom-0 fixed flex  items-center gap-5 justify-center'>
            <h1 className='text-xl font-medium'>4.4 KM away </h1>
            <button 
            onClick={()=>{
                setfinish(true)
            }}
            className='p-2 bg-green-600 rounded-md text-xl font-semibold text-white' >Complete ride </button>
        </div>
        <div ref={Finishref} className='fixed bg-white  rounded-2xl bottom-0 w-full h-[75%] '>

        <Finish  ></Finish>
        </div>
    </div>
  )
}

export default CaptainRiding