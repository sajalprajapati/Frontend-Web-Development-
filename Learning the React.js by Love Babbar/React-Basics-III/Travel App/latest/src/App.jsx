import React from 'react'
import Tour from './components/Tour'
import data from './utils/Data'
import { useState } from 'react';

const App = () => {
  
  const [tours, setTours] = useState(data);

  return (
    <div>
       <h2>Plan With Sajal</h2>
       <Tour tours={tours}/>
    </div>
  )
}

export default App