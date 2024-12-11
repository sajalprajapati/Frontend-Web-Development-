import React from 'react'
import Template from '@/components/Template'
import signupImg from "../assets/signup.png"

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="join the Millions learning to code with studyNotion for free"
    desc1="Build skills for today,tomorrow, and beyond"
    desc2="Education to future-proof your career"
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default Signup