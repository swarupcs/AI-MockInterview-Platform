import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';
import { SignInPage } from './Pages/SignInPage';
import { SignUpPage } from './Pages/SignUpPage';
import { ForgotPassword } from './components/Auth/ForgotPassword';
import { DashboardPage } from './Pages/DashboardPage';
import { TextInterviewPage } from './Pages/TextInterviewPage';
import { Notfound } from './Pages/NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/text-interview/' element={<TextInterviewPage />} />
      <Route path='*' element={<Notfound/>} />
    </Routes>
  );
};
