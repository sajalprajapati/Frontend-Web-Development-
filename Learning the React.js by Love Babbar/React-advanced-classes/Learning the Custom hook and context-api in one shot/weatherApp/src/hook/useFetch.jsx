import React, { useEffect } from 'react'
import { useState } from 'react'

const useFetch = (url) => 
{
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState("");
  const [error,setError]=useState(null);


  async function callingWeatherApi(url) 
  {
       setLoading(true);

       try
       {
          const data=await fetch(url);
          const output=await data.json();
          setData(output);
       }

       catch(error)
       {
        setError(err.message);
       }

       setLoading(false);
  }
  

  useEffect
  (
    ()=>
     {
        if(!url) return;
       callingWeatherApi(url)
     },[url]
  )


  return {loading,data,error};
}

export default useFetch