import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./counterslice";

export const store = configureStore({
    //reducer can only store value of state in store
    reducer:{
        counter:counterslice

    }
})