import React from 'react';
import Logo from '../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Navbar = (props) => {
  const { toast } = useToast();
  const { isLoggedIn, setIsLoggedIn } = props;

  return (
    <header className="bg-gray-50 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img src={Logo} alt="logo" className="w-40 h-auto" loading="lazy" />
        </NavLink>

        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-black border-b-2 border-black" : "hover:text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-black border-b-2 border-black" : "hover:text-black"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-black border-b-2 border-black" : "hover:text-black"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-4">
          {!isLoggedIn && (
            <NavLink to="/login">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition">
                Login
              </button>
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink to="/signup">
              <button
                onClick={() => {
                  toast({ description: "Successful Sign Up" });
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition"
              >
                Sign Up
              </button>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink to="/login">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast({ description: "Successfully Logged Out" });
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                Log Out
              </button>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink to="/dashboard">
              <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition">
                Dashboard
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;