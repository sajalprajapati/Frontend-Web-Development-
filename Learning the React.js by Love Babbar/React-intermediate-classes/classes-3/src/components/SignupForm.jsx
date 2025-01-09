import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'


const SignupForm = () => {


  // name helps figure out which part of formData to update.
// value ensures the input field always shows the latest data from formData.

  const [formData,setFormData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:""
  })


  const [showPassword,setShowPassword]=useState(false);

  function changeHandler(event) 
  {
    setFormData((prev)=>({
      ...prev,
      [event.target.name]:event.target.value
    }))
  }
  return (
    <div>
      {/* student-instructor tab */}

      <div>
        <button>
          student
        </button>

        <button>
          instructor
        </button>
      </div>




      {/* form creation */}
      <form>
        

        {/* contain only first name and last name: */}
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



        {/* containe the email address... */}
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



        {/* create password and confirm password logic... */}
        <div>
          <label>
            <p>Create Password <sup>*</sup></p>
            <input
              required
              type={showPassword?('text'):('password')}
              placeholder='Enter password'
              name='password'
              value={formData.password}
              onChange={changeHandler}
            />


            <span onChange={() => setShowPassword((prev)=>!prev)}>
              {showPassword? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
          </label>




          <label>
          <p>Confirm Password <sup>*</sup></p>
            <input
              required
              type={showPassword?('text'):('password')}
              placeholder='Enter password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={changeHandler}
            />


            <span onChange={() => setShowPassword((prev)=>!prev)}>
              {showPassword? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
          </label>
        </div>



       {/* create button here */}
       <button>
        Create Account
       </button>
      </form>
    </div>
  )
}

export default SignupForm