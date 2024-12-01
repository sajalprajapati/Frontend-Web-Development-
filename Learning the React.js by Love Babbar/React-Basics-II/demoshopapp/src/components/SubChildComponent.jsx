import React from 'react'

const SubChildComponent = (props) => {
  
    const productData=
    {
        name:"Sajal Prajapati",
        age:22
    }

    props.onSaveProduct(productData)
  return (
    <div></div>
  )
}

export default SubChildComponent