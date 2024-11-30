import React from 'react';

const Cards = (props) => {
  return (
    <div className="max-w-2xl mx-auto">
      {props.children}
    </div>
  );
};

export default Cards;