import React from 'react'

const Card = ({
    id,name,info,image,price
}) => {


    const description =`${info.substring(0,200)}...`
  return (
    //displaying the Card....
    <div>
       <img src={image}/>
       <div className='tour-details'>
        <h4 className='tour-price'>{price}</h4>
        <h4 className='tour-name'>{name}</h4>
       </div>


       <div className='description'>
        {description}
       </div>
    </div>
  )
}

export default Card