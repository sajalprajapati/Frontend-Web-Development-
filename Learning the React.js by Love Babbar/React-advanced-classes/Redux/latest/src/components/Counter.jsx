import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {


    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
  return (
    <div>
        <button 
        onClick={()=>dispatch(increment())}>
            Increment
        </button>

        <br/>

         {/* 
         To fetch the value from counterSlice state....we will use 
         useSelector.
          */}
        <div>
            {count}
        </div>


        <br/>
        <br/>


        <button onClick={()=>dispatch(decrement())}>
            Increment
        </button>
    </div>
  )
}

export default Counter