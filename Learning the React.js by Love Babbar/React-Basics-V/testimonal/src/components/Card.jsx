import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  const review = props.review;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md mx-auto">
      {/* Profile Image */}
      <div className="mb-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-24 h-24 rounded-full mx-auto shadow-md"
        />
      </div>

      {/* Name */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{review.name}</h1>
      </div>

      {/* Job Title */}
      <div>
        <p className="text-sm text-gray-500 mb-4">{review.job}</p>
      </div>

      {/* Quote Section */}
      <div className="text-gray-700 mb-6">
        <FaQuoteLeft className="text-blue-500 inline-block mr-2" />
        <p className="inline">{review.text}</p>
        <FaQuoteRight className="text-blue-500 inline-block ml-2" />
      </div>

      {/* Buttons */}
     
    </div>
  );
};

export default Card;
