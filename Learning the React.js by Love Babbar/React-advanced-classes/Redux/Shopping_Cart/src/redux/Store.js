import { configureStore } from "@reduxjs/toolkit";
import  CartSlice  from "./Slices/cartSlice";
// import CounterSlice from "./slices/CounterSlice";


//configureStore is creating the centralised store...


export const store =configureStore({
    reducer:{
        counter:CartSlice
    },
})