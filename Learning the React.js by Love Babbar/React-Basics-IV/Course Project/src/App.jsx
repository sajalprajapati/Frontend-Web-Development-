import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Filter from './components/Filter'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Filter/>
      <Cards/>
      {/* changing the way  */}
    </div>
  )
}

export default App