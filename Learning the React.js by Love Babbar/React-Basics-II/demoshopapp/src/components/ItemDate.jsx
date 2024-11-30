import React from 'react';

const ItemDate = (props) => {
  const { day, month, year } = props;

  return (
    <div className="text-center text-gray-700 mt-3 bg-slate-400 flex items-center justify-between ">
      <span className="block text-xl font-bold">{day}</span>
      <span className="block text-lg">{month}</span>
      <span className="block text-sm text-gray-500">{year}</span>
    </div>
  );
};

export default ItemDate;