import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = ({setIsLoggedIn}) => {

  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }




  function submitHandler(event) {
    event.preventDefault();

    setIsLoggedIn(true); // Update parent state to indicate logged-in status

    toast.success("You are successfully Signup!", { // Show toast notification
      position: "top-center", // Position of the toast
      autoClose: 3000, // Close automatically after 3 seconds
    });

    navigate("/login"); // Navigate to the dashboard
  }



  return (
    <div>
      {/* Student-Instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      {/* Form creation */}
      <form onSubmit={submitHandler}>

      
        {/* First Name and Last Name */}
        <div>
          <label>
            <p>First Name <sup>*</sup></p>
            <input
              type='text'
              required
              name='firstname'
              onChange={changeHandler}
              placeholder='Enter your first name'
              value={formData.firstname}
            />
          </label>

          <label>
            <p>Last Name <sup>*</sup></p>
            <input
              type='text'
              required
              name='lastname'
              onChange={changeHandler}
              placeholder='Enter your last name'
              value={formData.lastname}
            />
          </label>
        </div>

        {/* Email Address */}
        <label>
          <p>Email Address <sup>*</sup></p>
          <input
            type='email'
            placeholder='Enter your email address'
            name='email'
            value={formData.email}
            required
            onChange={changeHandler}
          />
        </label>

        {/* Password Fields */}
        <div>
          {/* Create Password */}
          <label>
            <p>Create Password <sup>*</sup></p>
            <input
              required
              type={showCreatePassword ? 'text' : 'password'}
              placeholder='Enter password'
              name='password'
              value={formData.password}
              onChange={changeHandler}
            />
            <span onClick={() => setShowCreatePassword((prev) => !prev)}>
              {showCreatePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          {/* Confirm Password */}
          <label>
            <p>Confirm Password <sup>*</sup></p>
            <input
              required
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='Enter password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={changeHandler}
            />
            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
