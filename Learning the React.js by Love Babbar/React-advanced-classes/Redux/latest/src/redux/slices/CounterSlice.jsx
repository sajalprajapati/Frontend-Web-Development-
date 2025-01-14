import {createSlice} from "@reduxjs/toolkit";


const initialState=
{
    value:0
}
export const counterSlice=createSlice
(
    {
        name:"counter",
        initialState,
        reducers:
        {
            increment:(state) =>
                {
                    state.value+=1;
                },


            decrement:(state) =>
                {
                    state.value-=1;
                }    
        }
    }
);


export const {increment,decrement} =counterSlice.actions;
export default counterSlice.reducer;



/*
Listen me very thoroughly that Great slice is a function that has to create
Slice for a particular state management. As we can see above great lies is creating.
Slice in the global container With labeling it as name counter, and then we are defining initial state value under initial state.
1.2 remember is that all the things is happening in terms of object?.


Now we have to define in order to understand create lies. It's imaginative just as a function where where we need to first define the function name.
Then defined the local variables associated with it as in this initial state
After which we defined functionality in slice define functionality that a group for the usage
Termed as reducer so create lies returned to act two objects first one is .actions and .reducer....



.actions: Think of it as just telling the component whomever it is calling to about what a reducer can do just like can I have an example a reducer can only just increment and decrement it is just telling
It is a inform me. What can I do? What this life can do not how it can do now when I say how it can do it will come under tough reducer reducer.

This is a functionality of above  code....
*/