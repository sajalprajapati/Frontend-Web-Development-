import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";


//configureStore is creating the centralised store...


export const store =configureStore({
    reducer:{
        counter:CounterSlice
    },
})