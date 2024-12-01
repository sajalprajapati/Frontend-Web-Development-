import React, { useState } from 'react';

const MainBody = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className=' bg-white text-black h-[150px] w-[400px] rounded-md shadow-md flex items-center justify-center flex-col gap-4'>
      {/* Counter Buttons */}
      <div className='flex items-center justify-between w-full px-4'>
        <button
          className='font-bold text-xl bg-slate-200 px-4 py-1 rounded-md hover:bg-slate-300'
          onClick={() => setNumber(number - 1)}
        >
          -
        </button>
        <span className='text-lg font-semibold bg-yellow-200 rounded px-4 py-2'>
          {number}
        </span>
        <button
          className='font-bold text-xl bg-slate-200 px-4 py-1 rounded-md hover:bg-slate-300'
          onClick={() => setNumber(number + 1)}
        >
          +
        </button>
      </div>

      {/* Reset Button */}
      <button
        className='font-bold text-xl bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
        onClick={() => setNumber(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default MainBody;
