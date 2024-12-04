import React from 'react';
import Testimonial from './components/Testimonial';
import reviews from './utils/Data';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Our Testimonials
        </h1>
        <div className="border-b-2 border-gray-200 mb-6"></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;