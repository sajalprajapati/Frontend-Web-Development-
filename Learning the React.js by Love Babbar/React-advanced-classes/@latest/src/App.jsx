import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center background">
      <h1 className="bg-white rounded-md w-11/12 max-w-4xl text-center mt-10 text-3xl font-extrabold p-4">
        GIF Generator
      </h1>
      <div className="flex flex-col w-full max-w-4xl items-center gap-y-10 mt-8 px-4">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
