import React, { useState } from 'react';

const Card = ({ id, name, info, image, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-64 object-cover" src={image} alt={name} />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-bold">{name}</h4>
          <h4 className="text-blue-600 font-semibold">{price} INR</h4>
        </div>
        <p className="text-gray-600 mt-2">
          {description}
          <span
            className="text-blue-600 cursor-pointer ml-1"
            onClick={readmoreHandler}
          >
            {readmore ? '...show less' : 'read more'}
          </span>
        </p>
        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 w-full"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Card;
