import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/captainSignup';
import Start from './pages/Start';
import Home from './pages/Home';
import UserLogout from './pages/UserLogout';
import CaptainLogout from './pages/CaptainLogout';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import CaptainProteected from './pages/CaptainProteected';
import CaptainHome from './pages/CaptainHome';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/user-login' element={<UserLogin />} />
        <Route path='/user-signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home' element={<UserProtectedWrapper><Home /></UserProtectedWrapper>} />
        <Route path='/captain-home' element={<CaptainProteected><CaptainHome /></CaptainProteected>} />
        <Route path='/user/logout' element={<UserLogout />} />
        <Route path='/captain/logout' element={<CaptainLogout />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/captain-riding' element={<CaptainRiding />} />
      </Routes>
    </div>
  );
};

export default App;