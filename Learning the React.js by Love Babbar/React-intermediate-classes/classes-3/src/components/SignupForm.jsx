import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
// import { Link } from 'react-router-dom';

const SignupForm = () => {

   const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
   }) 

   function changeHandler(event)
   {
    setFormData((prevData) =>({
        ...prevData,
        [event.target.name]:event.target.value
    }))
   }

  const [showPassword,setShowPassword]=useState(false)

  return (
    <div>
        {/* student-instructor tab */}
        <div>
            <button>
                Student
            </button>

            <button>
                Instructor
            </button>
        </div>



        <form>
        {/* containiung the first name and last name */}
           <div>
           <label>
                <p>First Name <sup>*</sup></p>
                <input
                required
                type='text'
                name='firstName'
                onChange={changeHandler}
                placeholder='Enter your first Name'
                value={formData.firstName}
            />
            </label>


            <label>
                <p>Last Name <sup>*</sup></p>
                <input
                required
                type='text'
                name='lastName'
                onChange={changeHandler}
                placeholder='Enter your Last Name'
                value={formData.lastName}
            />
            </label>
         

           </div>
             

          {/* email address */}
          <label>
            <p>Enter Your Email Address<sup>*</sup></p>
            <input
                required
                type='email'
                name='email'
                onChange={changeHandler}
                placeholder='Enter Your Email Address'
                value={formData.email}
            />
          </label>


          {/* createPassword and Confirm Password */}
          <div>
            <label>
                <p>Create Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    onChange={changeHandler}
                    placeholder='Enter Your Password'
                    value={formData.password}
                    name='password'
                />

               <span onClick={()=>setShowPassword((prev)=!prev)}>
                    {showPassword?(AiOutlineEye):(AiOutlineEyeInvisible)}
                </span>
            </label>




            <label>
                <p>Confirm  Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                    value={formData.password}
                    name='confirmPassword'
                />

               <span onClick={()=>setShowPassword((prev)=!prev)}>
                    {showPassword?(AiOutlineEye):(AiOutlineEyeInvisible)}
                </span>
            </label>
          </div>

          <button>
            Create Account
          </button>
        </form>
    </div>
  )
}

export default SignupForm