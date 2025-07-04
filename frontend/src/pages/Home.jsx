import React, { useContext, useEffect } from 'react'
import logo from '../images/logo.png'
import mapImage from '../images/map.jpg'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useState } from 'react'

import { useRef } from 'react'
import axios from 'axios'
import LocationPanel from '../components/LocationPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/UserConfirmRide'
import WaitForDriver from '../components/WaitForDriver'
import DriverDetails from '../components/DriverDetails'
import { SocketContext} from '../context/SocketContext'
// const { socket } = useContext(SocketContext);
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    
    const {user} = useContext(UserDataContext);
    
    const [vehicleFound, setVehicleFound] = useState(false);
    const [ride, setRide] = useState(null);

    // useEffect(() => {
    //     if (socket && user) {
    //         socket.emit("join", { userType: "user", userId: user._id });
    //     }
    // }, [socket, user]);

    // useEffect(() => {
    //     if (socket) {
    //         socket.on('ride-confirmed', ride => {
    //             setVehicleFound(false);
    //             setWaitDriver(true);
    //             setRide(ride);
    //         });

    //         socket.on('ride-started', ride => {
    //             console.log("ride");
    //             setWaitDriver(false);
    //             navigate('/riding', { state: { ride } });
    //         });

    //         return () => {
    //             socket.off('ride-confirmed');
    //             socket.off('ride-started');
    //         };
    //     }
    // }, [socket, navigate]);

    const [pickup, setpickup] = useState("")
    const [destination, setdestination] = useState("")
    const [vehicleType, setvehicleType] = useState(null)
    const [panelopen, setpanelopen] = useState(false)
    const [PickupSuggestions, setPickupSuggestions] = useState([])
    const [DestinationSuggestions, setDestinationSuggestions] = useState([])
    const [fare, setfare] = useState(null)

    const [vehiclePanel, setvehiclePanel] = useState(false)
    const [confirmRide, setconfirmRide] = useState(false)
    const [WaitDriver, setWaitDriver] = useState(false)
    const [DriverDetail, setDriverDetail] = useState(false)
    const panelRef = useRef(null)
    const vehiclePanelref = useRef(null)
    const WaitForDriverRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const DriverDetailRef = useRef(null)
    const [activefield, setactivefield] = useState(null)
    const submitHandler = (e) => {
        e.preventDefault()
    }


const errorHandling=()=>{
    console.log(user)
}


    const findTrip = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
                params: { pickup, destination },
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(response.data)
            setfare(response.data)

            console.log(response.data);
            setpanelopen(false)
            setvehiclePanel(true)

        } catch (error) {
            console.log(error)
        }
    }

    const createRide = async (vehicleType) => {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
           user, pickup, destination, vehicleType
        }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        console.log(response.data.user)
    }

    useGSAP(function () {
        if (panelopen) {
            gsap.to(panelRef.current, {
                height: '70%'
            });
        } else {
            gsap.to(panelRef.current, { height: '0%' }); // Or whatever your closed height should be
        }
    }, [panelopen]);

    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelref.current, {
                transform: 'translateY(0)'
            })

        } else {
            gsap.to(vehiclePanelref.current, {
                transform: 'translateY(100%)'
            })
        }

    }, [vehiclePanel])

    useGSAP(function () {
        if (confirmRide) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })

        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }

    }, [confirmRide])

    useGSAP(function () {
        if (WaitDriver) {
            gsap.to(WaitForDriverRef.current, {
                transform: 'translateY(0)'
            })

        } else {
            gsap.to(WaitForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }

    }, [WaitDriver])

    useGSAP(function () {
        if (DriverDetail) {
            gsap.to(DriverDetailRef.current, {
                transform: 'translateY(0)'
            })

        } else {
            gsap.to(DriverDetailRef.current, {
                transform: 'translateY(100%)'
            })
        }

    }, [DriverDetail])

    useEffect(() => {
        // Redirect if no user data
        if (!user) {
            const userData = localStorage.getItem('userData')
            if (!userData) {
                navigate('/user-login')
            }
        }
    }, [user, navigate])

    // Add this to check if user data is available
    useEffect(() => {
        console.log('Current user data:', user)
    }, [user])

    return (
        <div className='flex flex-col w-screen h-screen '>
            <img className='w-16 fixed left-5 top-5 ' src={logo} alt="" />
            <div className='h-screen w-screen'>
                <img className='h-full w-full object-top' src={mapImage} alt="" />
            </div>

            <div className='flex flex-col absolute justify-end top-0 w-screen h-screen overflow-hidden '>

                <div className='h-[40%] p-5 bg-white '>
                    <h4 className='text-2xl font-bold'>Find a trip</h4>
                    <form
                        className='flex flex-col text-center gap-2 relative items-center'
                        onSubmit={(e) => {
                            submitHandler(e)
                        }}
                        action="">
                        <div className="line absolute h-16 w-1 bg-gray-700 rounded-full top-[15%] left-5"></div>
                        <input
                            value={pickup}
                            onChange={(e) => {
                                setpickup(e.target.value)
                               
                            }}
                            onClick={() => {
                                setpanelopen(true)
                                errorHandling()
                            }}
                            className='mt-3 py-2 bg-gray-200 text-center rounded w-full ' type="text" placeholder='add a pick up location' />
                        <input
                            value={destination}
                            onChange={(e) => setdestination(e.target.value)}
                            onClick={() => {
                                setpanelopen(true)
                            }}
                            className=' py-2 bg-gray-200 text-center rounded w-full' type="text" placeholder='enter your detination' />
                        <button
                            onClick={findTrip}
                            className='px-3 py-2 bg-black text-white w-56 mt-3 rounded-md '>Find Rides</button>
                    </form>
                </div>
                <div ref={panelRef} className='h-0 bg-white ' >
                </div>
            </div>
            <div ref={vehiclePanelref} className='fixed bottom-0  bg-white w-full '>
                <VehiclePanel
                    setfare={setfare} fare={fare} setWaitDriver={setWaitDriver} setDriverDetail={setDriverDetail}
                    setconfirmRide={setconfirmRide} setvehiclePanel={setvehiclePanel}
                    setvehicleType={setvehicleType}
                ></VehiclePanel>
            </div>

            <div ref={confirmRidePanelRef} className='fixed   rounded-2xl bottom-0 w-full h-[75%]'>
                <ConfirmRide
                    fare={fare}
                    createRide={createRide}
                    setvehicleType={setvehicleType} vehicleType={vehicleType}
                    setWaitDriver={setWaitDriver} setconfirmRide={setconfirmRide}
                    pickup={pickup} destination={destination}
                ></ConfirmRide>
            </div>

            <div ref={WaitForDriverRef} className='fixed   rounded-2xl bottom-0 w-full h-[75%]'>
                <WaitForDriver
                    pickup={pickup} destination={destination}
                    vehicleType={vehicleType}
                    fare={fare}
                    setWaitDriver={setWaitDriver}></WaitForDriver>
            </div>

            <div ref={DriverDetailRef} className='fixed   rounded-2xl bottom-0 w-full h-[75%]'>
                <DriverDetails setWaitDriver={setWaitDriver}></DriverDetails>
            </div>
        </div>
    )
}

export default Home