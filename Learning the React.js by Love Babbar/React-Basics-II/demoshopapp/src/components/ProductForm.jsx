import React, { useState } from 'react';

const ProductForm = () => {

  //  const [first, setfirst] = useState(second)
  // const [title,setTitle]=useState('');
  // const [data,setDate]=useState('');

  // function titleChangeHandler(event)
  // {
  //   // alert("title is being changing");
  //   event.preventDefault();
  //   setTitle(event.target.value);
  // }


  // function dateChangeHandler(event)
  // {
  //   setDate(event.target.value);
  // }



    const [fullProductInput,setfullProductInput]=useState({
      title:'',
      date:''
    })


    function setfullProductInput()
    {
      
    }
  return (
    <form className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
      {/* Title Field */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Title</label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter product title"

          onChange={titleChangeHandler}
        />
      </div>

      {/* Date Field */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Date</label>
        <input
          type="date"
          min="2023-01-01"
          max="2023-12-12"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={dateChangeHandler}
       />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
