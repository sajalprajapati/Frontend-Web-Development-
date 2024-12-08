import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Support = () => {
  const navigate=useNavigate();
  
   function clickHandler()
   {
    navigate("/labs");
   }

  return (
    <div>
    {/* <Outlet/> */}
       <div> Kya Support Chahaiye re tuj ko </div>
       <button onClick={clickHandler}>Move to Labs Page</button>
    </div>
  )
}

export default Support