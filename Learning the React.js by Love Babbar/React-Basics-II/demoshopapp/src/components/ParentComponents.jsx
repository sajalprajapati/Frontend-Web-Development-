import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponents = () => {

   function printProductData(data)
   {
    console.log("I'm inside the parent");
    // alert(data);
    console.log(data);
   }


  return (
    <div>
        <>
        <ChildComponent printProduct={printProductData} />
        </>
    </div>
  )
}

export default ParentComponents