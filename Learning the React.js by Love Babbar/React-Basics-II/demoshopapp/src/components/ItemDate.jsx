import React from 'react'

const ItemDate = (props) => {
  const day=props.day;
  const month=props.month;
  const year=props.year;


  return (
    <div className='flex justify-center items-center'>
      <span>{day}</span>
      <br/>
      <span>{month}</span>
      <br/>
      <span>{year}</span>
    </div>
  )
}

export default ItemDate