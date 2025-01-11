import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const VITE_API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;


const useGif = (tag) => 
{
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    // const [tag, setTag] = useState('car');
  



    const randomMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${VITE_API_KEY}&tag=${tag}`
    const tagMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${VITE_API_KEY}`
    

    const fetchData = async (tag) => 
{
      setLoading(true);
      try 
      
      
      {
        const { data } = await axios.get(tag ? (tagMemeUrl):(randomMemeUrl));
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
      } 
      
      
      catch (error) 
      {
        console.error('Error fetching the GIF:', error);
      }



      setLoading(false);
};
  

 
    useEffect
    (
        () => 
    {
      fetchData('car');
    },

    []);
  
   

     return {
        gif,loading,fetchData
     };


      // we don't need jsx in custom hook creation....


    //   const handleClick = () => {
        // fetchData();
    //   };
  
    // const handleChange = (event) => {
    //   setTag(event.target.value);
    // };
  
  
    // return (
    //   <div className="w-full max-w-4xl bg-gray-100 rounded-lg border border-gray-300 shadow-md flex flex-col items-center gap-y-5 mt-4 p-6 md:mt-6 md:p-8 lg:mt-8 lg:p-10">
    //     <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
    //       Random <span className="capitalize">{tag}</span> Gif
    //     </h1>
    //     {loading ? (
    //       <Spinner />
    //     ) : (
    //       <img
    //         src={gif}
    //         alt={`Random ${tag} Gif`}
    //         className="w-full h-auto max-w-2xl rounded-md object-contain"
    //       />
    //     )}
    //     <input
    //       type="text"
    //       className="w-full max-w-md bg-white text-lg py-2 rounded-md text-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       onChange={handleChange}
    //       value={tag}
    //       placeholder="Enter a tag"
    //     />
    //     <button
    //       onClick={handleClick}
    //       className="w-full max-w-md bg-blue-600 text-white text-lg py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
    //     >
    //       Generate
    //     </button>
    //   </div>
    // );
}

export default useGif