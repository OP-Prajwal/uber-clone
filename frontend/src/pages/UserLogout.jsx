import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const { setuser } = useContext(UserDataContext)
    const navigate = useNavigate()

    useEffect(() => {
        setuser(null)
        localStorage.removeItem('userData')
        localStorage.removeItem('token')
        navigate('/user-login')
    }, [])

    return null
}

export default UserLogout