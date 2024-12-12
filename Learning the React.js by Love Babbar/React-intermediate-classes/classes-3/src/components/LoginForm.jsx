import { toast } from '@/hooks/use-toast';
import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast'

const LoginForm = ({setIsLoggedIn}) => {

    const {toast} =useToast();

    const navigate=useNavigate();

    const [formData,setFormData]=useState({
        email:"",
        password:""
    });

    const[showPassword,setShowPassword]=useState(false);

    function changeHandler(event)
    {
      setFormData((prevData)=>({
        ...prevData,
        
            [event.target.name]:event.target.value
        
      }))
    }



    function submitHandler(event)
    {
      event.preventDefault();

      setIsLoggedIn(true);

      toast({description:"Successful Sign In"});

      navigate("/dashboard");
    }


  return (
    <>
        <form onSubmit={submitHandler}>
            <label>
             {/* we can also write the label like this ... */}
                <p>
                    Email Address <sup>*</sup>
                </p>

                <input
                    type='email'
                    required
                    value={formData.email}
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter your email id'
                />
            </label>



            <label>
             {/* we can also write the label like this ... */}
                <p>
                    Password <sup>*</sup>
                </p>

                <input
                    type={showPassword? ("text"):("password")}
                    required
                    value={formData.password}
                    name='password'
                    onChange={changeHandler}
                    placeholder='Enter your password'
                />


                <span onClick={()=>setShowPassword((prev)=!prev)}>
                    {showPassword?(AiOutlineEye):(AiOutlineEyeInvisible)}
                </span>

                <Link to="/">
                    <p>Forgot Password</p>
                </Link>
            </label>




            <button >
                Sign In
            </button>
        </form>
    </>
  )
}

export default LoginForm