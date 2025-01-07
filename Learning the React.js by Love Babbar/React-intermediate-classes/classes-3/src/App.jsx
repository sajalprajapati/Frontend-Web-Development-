import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import MasterPage from './pages/MasterPage';

const App = () => {
  const [isLoggedIn,setIsLoggedIn] =useState(false); // Telling us whether user is logged in or not.mtlb ki user login hai ki nhi 
  
  
  return (
    <div>
      <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      
      {/* Creating the Routes */}
      <Routes>
        <Route path="/" element={<MasterPage />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<div>404! Page Not Found.</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
