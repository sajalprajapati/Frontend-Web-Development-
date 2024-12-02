import React, { useEffect, useState } from 'react'

const App = () => {

  const[text,setText]=useState('');

  /*
  Use effect hook: fast, our react dome will render than what we want to render after our first dome render it should come in use effect
  Suppose we are in app or GSX which we are in, then firstly, whole mail logic will execute then use effect will be rendered.
  */
  /*
  //variation 1 ->Every Render it will run...
  useEffect
  (
   ()=>
    {
      console.log("UI rendering done");
    }
  );
  */

  /*
  //variation 2  ->Runs on first render...
  useEffect
  (
    ()=>
    {
      console.log("UI RENDERING DONE");
    },
  []); //<----[] it is dependencies
  */

/*
  //variation 3: whenever dependency changes.
  useEffect(()=>{
   console.log("TEXT KI VALUE CHANGE HUI HAI");
  },[text]); //<--here if the text dependencies changes then hook should run...
 */ 



  //variation 4:
  useEffect(()=>{
   //add event lsitener
   console.log("Listener added"); //then this will execute


   //remove add listener...
   return ()=>{
    console.log("Listener Removed");  //<---first this will execute 
   }

  },[text])

   function changeHandler(event)
   {
    setText(event.target.value);
     console.log(text);
   }

  return (
    <div className='bg-slate-400 flex justify-center items-center h-screen w-screen'>
        <div className='bg-black h-[50%] w-screen flex justify-center items-center'>
           <input 
           type='text' 
           className='bg-red-100 h-[30px] w-[200px] text-[red] text-center '
           onChange={(event)=>{changeHandler(event)}}/>
           
        </div>
    </div>
  )
}

export default App