import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div>
    <Outlet/> {/*show  your children*/}
       
    </div>
  )
}

export default MainHeader