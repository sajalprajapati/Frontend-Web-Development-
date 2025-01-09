import React from 'react'
import Template from '../components/Template.jsx'
import Loginimg from '../assets/Login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="build skills for today ,tomorrow and beyond."
        desc2="education to future proof your career."
        image={Loginimg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login