import React from 'react';

const  Filter = (props) => {
  const filterData = props.filterData;
  let category=props.category;
  let setCategory=props.setCategory;

  function filterHandler(title)
  {
    setCategory(title);
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
      {filterData.map((data) => (
        <button
          key={data.id}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors"
          onClick={()=>filterHandler(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
