import React, { createContext, useState, useEffect } from 'react'

export const UserDataContext = createContext()

const UserContext = ({children}) => {
    const [user, setuser] = useState(null)

    useEffect(() => {
        const userData = localStorage.getItem('userData')
        if (userData) {
            setuser(JSON.parse(userData))
        }
    }, [])

    const updateUser = (newUserData) => {
        setuser(newUserData)
        localStorage.setItem('userData', JSON.stringify(newUserData))
    }
    
    return (
        <UserDataContext.Provider value={{ user, setuser: updateUser }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext