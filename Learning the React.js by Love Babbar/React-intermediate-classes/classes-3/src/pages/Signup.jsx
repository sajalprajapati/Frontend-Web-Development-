import React from 'react'
import Template from '../components/Template'
import Sig from '../assets/Signup.png'



const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="join the millions learning to code with studyNotion for free"
        desc1="build skills for today tomorrow and beyond"
        desc2="education to future proof your career"
        image={Sig}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup