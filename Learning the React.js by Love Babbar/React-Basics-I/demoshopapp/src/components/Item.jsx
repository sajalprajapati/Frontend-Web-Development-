import React from 'react'

const Item = (props) => {
  const itemName=props.name;
  return (
   <div>
      <p className='text-center relative top-[250px]'>{itemName}</p>
      {props.children};
   </div>
  )
}

export default Item