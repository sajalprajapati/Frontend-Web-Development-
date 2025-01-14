import React from 'react'
import useProduct from '../hooks/Product'

const Home = () => {
  const {data,loading}=useProduct(`https://fakestoreapi.com/products`);
  // console.log(data);

  return (
    <div>
      
    </div>
  )
}

export default Home