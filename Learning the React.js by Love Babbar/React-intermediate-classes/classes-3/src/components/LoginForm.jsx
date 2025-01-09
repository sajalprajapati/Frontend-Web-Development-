import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'


const LoginForm = () => {
  const [formData,setFormData] =useState({
    email:"",
    password:""
  })



  const [showPassword,setShowPassword] =useState(false);

  function changehandler(event)
  {
    event.preventDefault();

    setFormData((prevData)=>(
      {
         ...prevData,
         [event.target.name]:event.target.value
      }
    ))
  }




  return (
    <div>

        <form>
          <label>
            <p>Email Address <sup>*</sup></p>



            <input
            type='email'
            required
            placeholder='email here'
            value={formData.email}
            onChange={changehandler}
            name='email'
          />
          </label>





          <label>
            <p>Password <sup>*</sup></p>



            <input
            type={showPassword ? ('text'):('password')}
            required
            placeholder='password here'
            value={formData.password}
            onChange={changehandler}
            name='password'
          />


          {/* icon rkhenge */}
          <span onClick={() => setShowPassword((prev)=> !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
          </span>



          <Link to="#">
            <p>
              Forgot Password
            </p>
          </Link>
          </label>

          

          <button>
            Sign In
          </button>
        </form>
    

    </div>
  )
}

export default LoginForm