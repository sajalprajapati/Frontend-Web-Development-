import React from 'react';
import Logo from '../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = (props) => {
  let { isLoggedIn, setIsLoggedIn } = props;

  const handleLoginClick = () => {
    toast.dismiss(); // Dismiss any existing toasts
    toast.info("Redirecting to Login...", {
      autoClose: 3000,
      hideProgressBar: false,
      position: "top-right",
      theme: "light",
    });
  };

  const handleSignupClick = () => {
    toast.dismiss(); // Dismiss any existing toasts
    toast.info("Redirecting to Signup...", {
      autoClose: 3000,
      hideProgressBar: false,
      position: "top-right",
      theme: "light",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.dismiss(); // Dismiss any existing toasts
    toast.success("Logged out successfully!", {
      autoClose: 3000,
      hideProgressBar: false,
      position: "top-right",
      theme: "light",
    });
  };

  const handleDashboardClick = () => {
    toast.dismiss(); // Dismiss any existing toasts
    toast.success("Welcome to your Dashboard!", {
      autoClose: 3000,
      hideProgressBar: false,
      position: "top-right",
      theme: "light",
    });
  };

  return (
    <div className="flex justify-center items-start">
      <NavLink to="/">
        <img src={Logo} alt="logo" height={32} width={160} loading="lazy" />
      </NavLink>

      <nav className="px-3">
        <ul className="flex gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* Buttons: Login, SignUp, Logout, Dashboard */}
      <div className="flex gap-3 ml-3">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button onClick={handleLoginClick}>Login</button>
          </NavLink>
        )}

        {!isLoggedIn && (
          <NavLink to="/signup">
            <button onClick={handleSignupClick}>Signup</button>
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink to="/">
            <button onClick={handleLogout}>Logout</button>
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink to="/dashboard">
            <button onClick={handleDashboardClick}>Dashboard</button>
          </NavLink>
        )}
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1} // Ensures only one toast is displayed at a time
      />
    </div>
  );
};

export default Navbar;
