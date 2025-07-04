import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProteected = ({ children }) => {
  const navigate = useNavigate()
  const { captain, setCaptain } = useContext(CaptainDataContext)
  const [isLoading, setIsLoading] = useState(true)
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      navigate('/captain-login')
      return
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.status === 200) {
        setCaptain(response.data)
        setIsLoading(false)
      }
    }).catch(err => {
      console.log(err)
      navigate('/captain-login')
    })
  }, [token, navigate, setCaptain])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

export default CaptainProteected