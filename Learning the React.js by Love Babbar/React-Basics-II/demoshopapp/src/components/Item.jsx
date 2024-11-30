import React from 'react'
import { useState } from 'react';

const Item = (props) => {
  
  const [title,setTitle]= useState(props.name);
  // const name=props.name;
  function clickHandler()
  {
    // alert("Item has been added");
    if(title==="Nirma" || title==='popcorn')
    {
      setTitle('popcorn')
    }
    else
    {
      alert('Item is being added');
    }
    
  }



  return (
    <div className="text-center mb-4">
      <p className="text-2xl font-semibold text-gray-800">{title}</p>
      {/* <div className="text-sm text-gray-600">{children}</div> */}

      <button onClick={clickHandler}>Add To Cart</button>
      {/* onClick above is props */};
      {/* if i write clickHandler () then this will automatically called the function even without clicking the button */}


    </div>
  );
};

export default Item;