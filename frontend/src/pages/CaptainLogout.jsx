import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
          headers: {
            authorization: `bearer ${token}`,
          },
        });

        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate('/captain-login')
          // Navigate only after successful logout
        
        }
      } catch (error) {
        console.log(error);
        // Handle error, perhaps display a message to the user
      }
    };

    // Call the logout function if a token exists
    if (token) {
        logout();
    } else{
      navigate('/captain-login')
    }


  }, [token]); // Empty dependency array ensures this runs only once on mount

  // Display a message while logging out or handle other loading state
  return (
    <div>Logging out...</div> 
  );
};

export default CaptainLogout;

