import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CaptainContext from './context/CaptainContext.jsx';
import UserContext from './context/UserContext.jsx';
import SocketProvider from './context/SocketContext.jsx';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <UserContext>
                <CaptainContext>
                    <SocketProvider>
                        <App />
                    </SocketProvider>
                </CaptainContext>
            </UserContext>
        </BrowserRouter>
    </StrictMode>
);
