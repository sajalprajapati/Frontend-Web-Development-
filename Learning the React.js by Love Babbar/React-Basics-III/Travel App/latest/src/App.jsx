import React, { useState } from 'react';
import Tour from './components/Tour';
import data from './utils/Data';

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-700">No Tours Left</h2>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => setTours(data)}
        >
          Refresh Content
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Plan With Sajal</h2>
      <Tour tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
