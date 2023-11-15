import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'counterapp',
    initialState:{
        value:0
    },
    //actions are created inside this reducers
    reducers:{
        //logics to update state
        //functions to increment number
        increment:(state,action)=>{
            state.value+=action.payload
        },
      //functions to decrement number

        decrement:(state,action)=>{
            state.value-=action.payload
        },
     //functions to reset number
     reset:(state)=>{
        state.value = 0 
     }

    }
})

export const {increment,decrement,reset} = counterSlice.actions
//reducer is required to store to change the state value
export default counterSlice.reducer 