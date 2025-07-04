import React, { useContext, useEffect, useState, useRef } from 'react'
import logo from '../images/logo.png'
import mapImage from '../images/map.jpg'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopup from '../components/ConfirmRidePopup'
import { SocketContext } from '../context/SocketContext'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import CaptainContext, { CaptainDataContext } from '../context/CaptainContext'

const CaptainHome = () => {
  const { socket, isConnected } = useContext(SocketContext);
  const { captainData } = useContext(CaptainDataContext);
  const [showRidePopup, setShowRidePopup] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const [rideDetails, setRideDetails] = useState();

  const RidePopupRef = useRef(null)
  const ConfirmRidePopupRef = useRef(null)

  useEffect(() => {
    if (!isConnected) {
      console.log('Socket not connected, attempting to connect...');
      socket.connect();
    }

    socket.on('connection-test', (msg) => {
      console.log('Connection test:', msg);
    });

    console.log('Socket instance:', socket);
    
    socket.on('connect', () => {
      console.log('Captain connected to socket');
    });

    socket.on('new-ride-request', (data) => {
      console.log('Received new ride request:', data);
      setRideDetails(data);
      setShowRidePopup(true);
    });

    return () => {
      socket.off('connection-test');
      socket.off('new-ride-request');
      socket.off('connect');
    };
  }, [socket, isConnected]);

  const handleAcceptRide = (rideDetails) => {
    socket.emit('ride-accepted', {
      rideId: rideDetails.rideId,
      driverDetails: {
        name: captainData.name,
        vehicle: captainData.vehicle,
        plateNo: captainData.plateNo,
        rating: captainData.rating || 5,
        captainId: captainData._id
      },
      userId: rideDetails.userId
    });
    setConfirmRidePopupPanel(true);
    setShowRidePopup(false);
  };

  useGSAP(function(){
    if(showRidePopup){
      gsap.to(RidePopupRef.current,{
        transform:'translateY(0)'
      })
     
    }else{
      gsap.to(RidePopupRef.current,{
        transform:'translateY(100%)'
      })
    }
    
    },[showRidePopup])

  useGSAP(function(){
    if(confirmRidePopupPanel){
      gsap.to(ConfirmRidePopupRef.current,{
        transform:'translateY(0)'
      })
     
    }else{
      gsap.to(ConfirmRidePopupRef.current,{
        transform:'translateY(100%)'
      })
    }
    
    },[confirmRidePopupPanel])

  return (
    <div className='overflow-hidden w-full   '>
      <img 
      className='w-full h-screen object-fill '
      src={mapImage} alt="" />


    <div className='  bg-white w-full   bottom-0 h-full   '>
  <CaptainDetails></CaptainDetails>
    </div>




      <div ref={RidePopupRef} className='fixed bg-white  rounded-2xl bottom-0 w-full h-[75%] '>
       
      <RidePopUp 
        rideDetails={rideDetails}
        setConfirmRidePopupPanel={setConfirmRidePopupPanel} 
        setRidePopupPanel={setShowRidePopup}
        onAccept={() => handleAcceptRide(rideDetails)}
        socket={socket}
      />
      </div>

      <div ref={ConfirmRidePopupRef} className='fixed bg-white  rounded-2xl bottom-0 w-full h-[100%]'>
        <ConfirmRidePopup rideDetails={rideDetails} setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setShowRidePopup} ></ConfirmRidePopup>
      </div>

      
    </div>
  )
}

export default CaptainHome