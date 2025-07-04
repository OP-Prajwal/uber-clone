import React, { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const SOCKET_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

const socket = io(SOCKET_URL, {
    autoConnect: false,
    reconnection: true,
    reconnectionAttempts: 3,  // Updated reconnectionAttempts to 3
    reconnectionDelay: 1000,
    timeout: 10000,  // Added timeout
    transports: ['websocket', 'polling'],
    withCredentials: true
});

const SocketProvider = ({ children }) => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const connectSocket = () => {
            console.log('Attempting to connect...');
            if (!socket.connected) {
                socket.connect();
            }
        };

        function onConnect() {
            console.log('Socket Connected!', socket.id);
            setIsConnected(true);
        }

        function onDisconnect() {
            console.log('Socket Disconnected!');
            setIsConnected(false);
        }

        function onError(error) {
            console.error('Socket error:', error);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('error', onError);
        socket.on('connect_error', (error) => {
            console.error('Connection error:', error);
            setIsConnected(false);  // Updated to set isConnected to false on connection error
        });

        connectSocket();

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('error', onError);
            socket.off('connect_error');
            socket.close();  // Added socket.close() on cleanup
        };
    }, []);

    return (
        <SocketContext.Provider value={{ socket, isConnected }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;