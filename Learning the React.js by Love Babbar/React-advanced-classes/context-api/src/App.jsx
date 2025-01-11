import React from 'react'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App

