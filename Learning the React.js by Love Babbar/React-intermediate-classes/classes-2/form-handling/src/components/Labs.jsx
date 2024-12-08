import React from 'react';
import { useNavigate } from 'react-router-dom';

const Labs = () => {
  // Move useNavigate to the top of the component
  const navigate = useNavigate();

  // Click handler function
  function clickHandler() {
    navigate("/about"); // Navigate to the About page
  }

  return (
    <div>
      {/* Uncomment this if you want to render nested routes */}
      {/* <Outlet /> */}
      <div>This is Labs page</div>
      <button onClick={clickHandler}>Move to About Page</button>
    </div>
  );
};

export default Labs;