import React from 'react'
// import Signup from '../pages/Signup'
import Frame from '../assets/Frame.png'
import LoginForm from './LoginForm.jsx'
import SignupForm from './SignupForm.jsx'

const Template = ({title,des1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{des1}</span>
                <span>{desc2}</span>
            </p>


            {/* formtype is a string */}
            {formtype ==="signup" ? (<SignupForm/>):(<LoginForm/>)}

            <div>
                <div></div> 
                <p>OR</p>
                <div></div>
            </div>


            <button>
                <p>Sign in with Google</p>
            </button>
        </div>


        <div>
           <img src={Frame} alt="Pattern" width={558} height={504} loading='lazy'/>
           <img src={image} alt="Students" width={558} height={490} loading='lazy'/>
        </div>
    </div>
  )
}

export default Template