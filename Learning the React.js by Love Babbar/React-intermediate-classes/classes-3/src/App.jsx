import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import MasterPage from './pages/MasterPage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [isLoggedIn,setIsLoggedIn] =useState(false); // Telling us whether user is logged in or not.mtlb ki user login hai ki nhi 
  
  
  return (
    <div>
      <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      
      {/* Creating the Routes */}
      <Routes>
        <Route path="/" element={<MasterPage />}>
          <Route index element={<Home isLoggedIn={isLoggedIn}/>} />
          <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
            
            } />
          <Route path="*" element={<div>404! Page Not Found.</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/*
element={
            <Dashboard />
            } />



            This may seem correct that whenever User type a link with /dashboard ..
            It should not be redirected to the dashboard, even without it the user is not logged in or sign out

*/