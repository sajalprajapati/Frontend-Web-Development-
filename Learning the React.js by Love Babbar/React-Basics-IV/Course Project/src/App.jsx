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
      {/* transferring the data as props */}
    </div>
  )
}

export default App