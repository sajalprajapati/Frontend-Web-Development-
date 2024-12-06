import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './components/Home'
import Support from './components/Support'
import Labs from './components/Labs'

const App = () => {
  return (
    <div
    className='flex justify-center items-center h-screen w-screen text-3xl'>
     <Routes> {/* iske  under hi bht saare route define karte hai*/}
       <Route path="/"  element={<Home/>}/>
       <Route path="/support" element={<Support/>}/>
       <Route path="/about" element={<div>About Page</div>}/>
       <Route path="/labs" element={<Labs/>}/>
       <Route path="*" element={<div>Not Found Page</div>}/>
     </Routes>
    </div>
  )
}

export default App