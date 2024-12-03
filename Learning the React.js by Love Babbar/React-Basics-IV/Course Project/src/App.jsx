import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Filter from './components/Filter'
import { filterData ,apiUrl} from './utils/Data'
import Spinner from './components/Spinner'
// import { CloseButton } from 'react-toastify'
import { Description } from '@radix-ui/react-toast'
// import { toast } from 'react-toastify'


const App = () => 
{

  const [courses,setCourses]=useState([]);
  const [loading,setLoading]=useState(true);

  async function fetchData() //it is a async function....
      {

        setLoading(true);
        try
        {
          const response=await fetch(apiUrl); //api calling 
          const output=await response.json();

          // console.log(output);

          setCourses(output.data);
        }

        catch(error)
        {
          toast.error({
            Description:"Error While Fetching the Data"
          });
        }

        setLoading(false);
      }


  
   useEffect
   (
    ()=>
    {
      fetchData();
    },
    [] //<---empty dependencies
   );
  


  return (
    <div>
      <Navbar/>
      <Filter filterData={filterData}/>
      <div>
        {
          loading?(<Spinner/>):(<Cards courses={courses}/>)
        }
      </div>
     
    </div>
  )
}

export default App