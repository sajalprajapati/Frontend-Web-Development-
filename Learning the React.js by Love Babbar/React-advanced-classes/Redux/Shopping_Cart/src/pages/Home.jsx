import React from 'react'
import useProduct from '../hooks/Product'
import Spinner from '../components/Spinner';
import Products from "../components/Products"


const Home = () => {
  const {data,loading}=useProduct(`https://fakestoreapi.com/products`);
  // console.log(data);

  return (
    <div>
       {loading ? (<Spinner/>) :(<Products data={data}/>)}
    </div>
  )
}

export default Home