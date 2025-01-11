import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const VITE_API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

const Tag = () => {
 
  const [tag, setTag] = useState('car');

   // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);
  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const { data } = await axios.get(
  //       `https://api.giphy.com/v1/gifs/random?api_key=${VITE_API_KEY}&tag=${tag}`
  //     );
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //   } 
    
    
  //   catch (error) {
  //     console.error('Error fetching the GIF:', error);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);


  const {gif,loading,fetchData}=useGif(tag);



  const handleChange = (event) => {
    setTag(event.target.value);
  };

  return (
    <div className="w-full max-w-4xl bg-gray-100 rounded-lg border border-gray-300 shadow-md flex flex-col items-center gap-y-5 mt-4 p-6 md:mt-6 md:p-8 lg:mt-8 lg:p-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
        Random <span className="capitalize">{tag}</span> Gif
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt={`Random ${tag} Gif`}
          className="w-full h-auto max-w-2xl rounded-md object-contain"
        />
      )}
      <input
        type="text"
        className="w-full max-w-md bg-white text-lg py-2 rounded-md text-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
        value={tag}
        placeholder="Enter a tag"
      />
      <button
        onClick={()=>{fetchData(tag)}}
        className="w-full max-w-md bg-blue-600 text-white text-lg py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
