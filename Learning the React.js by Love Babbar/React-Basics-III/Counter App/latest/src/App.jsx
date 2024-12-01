import React from 'react'
import Header from './components/Header'
import MainBody from './components/MainBody'

const App = () => {
  return (
    <div className='h-screen w-screen bg-slate-500 relative'>
      <div className='h-[50%] w-[50%]  absolute top-[50%] 
      left-[50%] text-white bg-black transform -translate-x-1/2 -translate-y-1/2
      text-center flex items-center justify-center flex-col '>
        <Header/>
        <MainBody/>
      </div>
    </div>
  )
}

export default App