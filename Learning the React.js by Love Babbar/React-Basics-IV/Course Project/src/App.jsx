import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
// import Data from './utils/Data'
import { filterData} from './utils/Data'
import { useEffect } from 'react'


const App = () => 
{

  const [courses,setCourses]=useState(null);

  //learning how do we api calling
  useEffect(() => {
    
    const fetchData =async () =>
    {
      try
      {
        const res=await fetch(`https://codehelp-apis.vercel.app/api/get-top-courses`);
        const output= await res.json();
        

        //save data into a variable
        console.log(output)
        setCourses(output.data);
      }



      catch(error)
      {
        toast.error("Something went wrong");
      }


    }
    
    fetchData();
  }, [])
    


  return (
    <div>
      <Navbar/>

      <Filter filterData={filterData} />

      <Cards  />


    </div>
  )
}

export default App