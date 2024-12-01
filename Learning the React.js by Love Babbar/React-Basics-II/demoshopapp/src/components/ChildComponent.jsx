import React from 'react'

const ChildComponent = (props) => {
  let newObject=
  {
    name:"Sajal Prajapati",
    age:22
  }

//   console.log(props);

   props.printProduct(newObject);

  return (
    <div></div>
  )
}

export default ChildComponent