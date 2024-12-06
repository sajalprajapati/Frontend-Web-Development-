// import React, { useState } from 'react'

// //handling the form and understanding it......

// // starting the form 
// // saving and updating the form...

// const App = () => {


//    //Not Handling multiple states;
//   // const[firstName,setFirstName]=useState("");
//   // const[lastName,setLastName]=useState("");

//   // function changefirstNameHandler(event)
//   // { 
//   //   setFirstName(event.target.value);
//   //   console.log(firstName); //<--targeting the value inside the event input....
//   // }

//   // function changelastNameHandler(event)
//   // {
//   //  setLastName(event.target.value);
//   //  console.log(lastName);
//   // }





//   //Handling multiple States:
//   //using the objects:
//   /*
//   let formData={firstName:"",lastName:""} //<----this is how we handle muultiple data in the vanilla js
//   */
//   const[formData,setFormData]=useState({ //<----this is how we create above object in this React.js
//     firstName:"",
//     lastName:"",
//     email:"",
//     comment:"",
//     isVisible:true,
//     mode:"",
//     favCar:""
//   })

//   /*
//   initially we have initialed our object empty that is prevFormData  now suppose the user click the first name and enters its name Jane then what will happen is that the object of old would be created and the value that would be updated is in the copied object that is being created and that is also visible to the user
//   */
//  function changeHandler(event)
//  {
//   const {name,value,checked,type}=event.target  //it is known as de-structuring....
//    setFormData(prevFormData =>{
//     return {
//       ...prevFormData,
//       [name]:type==="checkbox" ?checked:value
//     }
//    }); 
//  }

//   // console.log(formData.email);
//   // console.log(formData);

//   //Learning the Controlled Components:



//   function submitHandler(event)
//   {
//    event.preventDefault();

//    //printing the data;
//    console.log(formData)
//   }

//   return (
//     <div className='bg-black h-screen w-screen flex justify-center items-center '>
//       {/* creating the simple form */}

//       <form
//       onSubmit={submitHandler} 
//       className='h-screen w-[50%] bg-white flex flex-col justify-center items-center'>

       
//         <input 
//         className='px-5 py-6 my-3 bg-slate-100 text-black text-center'
//         type='text'
//         placeholder='first name'
//           onChange={changeHandler}
//           name="firstName"
//           value={formData.firstName}
//         />

       
//       <input 
//       className='px-5 py-6 my-3 bg-slate-100 text-black text-center' 
//         type='text'
//         placeholder='last name'
//           onChange={changeHandler}
//           name="lastName"
//           value={formData.lastName}
//         />




//      <input 
//       className='px-5 py-6 my-3 bg-slate-100 text-black  text-center' 
//         type='email'
//         placeholder='email'
//           onChange={changeHandler}
//           name="email"
//           value={formData.email}
//         />


//       {/* adding the textarea in this form */}
//       <textarea
//         className='px-5 py-6 my-3 bg-slate-100 text-[red] text-center'
//         placeholder='Enter Your Comments here...'
//         onChange={changeHandler}
//         name="comment"
//         value={formData.comment}
//       />



//       {/* adding the checkbox... */}

//       <div className='px-5 py-6 my-3 b-slate-100 flex flex-row  justify-normal items-center'>
//       <label htmlFor='Visible' className='px-5'>Am I visible</label>
//       <input 
//         type='checkbox'
//         className='px-5 py-6 my-3 bg-slate-200'
//         onChange={changeHandler}
//         name="isVisible"
//         id="Visible"
//         checked={formData.isVisible}
//       />
//       </div>



//       {/* adding the radio button */}
//       <div className='px-5 py-6 my-3 b-slate-100 flex flex-row  justify-normal items-center'>
//       <label htmlFor='Mode' className='px-5'>Online Mode </label>
//       <input 
//         type='radio'
//         className='px-5 py-6 my-3 bg-slate-200'
//         onChange={changeHandler}
//         name="mode" //<--it should be same for multiple radio
//         id="Mode"
//         // checked={formData.isVisible}
//         value="Online Mode"
//         checked={formData.mode === "Online Mode"}
//       />


//       <label htmlFor='Mode' className='px-5'>Offline Mode </label>
//        <input 
//         type='radio'
//         className='px-5 py-6 my-3 bg-slate-200'
//         onChange={changeHandler}
//         name="mode" //<--it is should be same
//         id="Mode"
//         // checked={formData.isVisible}
//         value="Offline Mode"
//         checked={formData.mode === "Offline Mode"}
//       />
//       </div>


//       {/* for grouping the multiple radio button we used fieldset ... */}
//       {/* adding the drop down option */}

//       <label htmlFor='favCar'>Tell me your Favourite Car</label>
//       <select 
//       onChange={changeHandler}
//       name="favCar"
//       id="favCar"
//       value={formData.favCar}
//        >

//        <option value="scorpio">Scorpio</option>
//        <option value="fortuner">Fortuner</option>
//        <option value="thar">Thar</option>
//        <option value="defender">Defender</option>
         
//       </select>

//      <button>Submit</button>
      
//       </form>
//     </div>
//   )
// }

// export default App




import React from 'react'
import Homework from './components/Homework'

const App = () => {
  return (
    <div>
      <Homework/>
    </div>
  )
}

export default App