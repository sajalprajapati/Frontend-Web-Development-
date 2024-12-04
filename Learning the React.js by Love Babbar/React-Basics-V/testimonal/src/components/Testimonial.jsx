import React, { useState } from 'react';
import Card from './Card';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonial = (props) => {
  const { reviews } = props;
  const [index,setIndex]=useState(0);

  function leftShiftHandler()
  {
    if(index-1<0)
    {
        setIndex(reviews.length-1);
    }
    else
    {
        setIndex(index-1);
    }
  }



  function rightShiftHandler()
  {
     if(index+1>=reviews.length)
     {
        setIndex(0);
     }
     else
     {
        setIndex(index+1);
     }
  }


  function surpriseHandler()
  {
    let calculation=(Math.floor(Math.random()*10));
    let answer=reviews.length
    console.log(calculation%answer);
    setIndex(calculation%answer);
  }

  return (
    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <Card review={reviews[index]} />


      <div className="flex justify-center space-x-4">
        <button 
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition"
        onClick={leftShiftHandler}>
          +
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 transition"
        onClick={rightShiftHandler}>
          -
        </button>
        <button
        onClick={surpriseHandler} 
        className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 transition">
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
