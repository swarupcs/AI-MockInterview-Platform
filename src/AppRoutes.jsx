import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';
import { SignInPage } from './Pages/SignInPage';
import { SignUpPage } from './Pages/SignUpPage';
import { ForgotPassword } from './components/Auth/ForgotPassword';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
    </Routes>
  );
};
