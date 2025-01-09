import React from 'react'
import Template from '../components/Template.jsx'
import Login from '../assets/Login.png'

const Login = () => {
  return (
    <div>
      <Template
        title="Welcome Back"
        des1="build skills for today ,tomorrow and beyond."
        desc2="education to future proof your career."
        image={Login}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login