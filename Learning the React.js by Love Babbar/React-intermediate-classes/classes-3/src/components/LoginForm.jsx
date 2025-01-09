import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  }); // State to store email and password input values

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  function changehandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value, // Update the specific field in formData
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    setIsLoggedIn(true); // Update parent state to indicate logged-in status

    toast.success("You are successfully logged in!", { // Show toast notification
      position: "top-center", // Position of the toast
      autoClose: 3000, // Close automatically after 3 seconds
    });

    navigate("/dashboard"); // Navigate to the dashboard
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* Email Field */}
        <label>
          <p>Email Address <sup>*</sup></p>
          <input
            type="email"
            required
            placeholder="email here"
            value={formData.email}
            onChange={changehandler}
            name="email" // Links this field to formData.email
          />
        </label>

        {/* Password Field */}
        <label>
          <p>Password <sup>*</sup></p>
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password
            required
            placeholder="password here"
            value={formData.password}
            onChange={changehandler}
            name="password" // Links this field to formData.password
          />
          {/* Toggle Password Visibility */}
          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          {/* Forgot Password Link */}
          <Link to="/">
            <p>Forgot Password</p>
          </Link>
        </label>

        {/* Sign-In Button */}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
