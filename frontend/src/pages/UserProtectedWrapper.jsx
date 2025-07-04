import React from 'react'
import {UserDataContext} from "../context/UserContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const UserProtectedWrapper = ({children}) => {





 const token=localStorage.getItem('token')
  const navigate=useNavigate()

  useEffect(() => {
    if(!token){
      navigate('/user-login')
    }
  
  
  }, [token])


  









  return (
   <>
   {children}
   </>
  )
}

export default UserProtectedWrapper