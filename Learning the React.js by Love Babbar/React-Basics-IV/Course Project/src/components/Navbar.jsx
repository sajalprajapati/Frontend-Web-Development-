import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-center items-center">
        {/* Title */}
        <h1 className="text-2xl font-bold tracking-wide">Top Courses</h1>
      </div>
    </nav>
  );
};

export default Navbar;