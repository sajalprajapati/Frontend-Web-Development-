import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => 
{
  return (
    <div>
       <div>
       <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {
          formtype ==="signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
        }


        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>Sign in with Google</button>

       </div>

        <div>
           <img src={frameImage} alt="Pattern"
           width={558}
           height={504}
           loading="lazy"/> 


          <img src={image} alt="Students"
           width={558}
           height={490}
           loading="lazy"/> 
        </div>
    </div> 



  )
}

export default Template