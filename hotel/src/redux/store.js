import { configureStore } from "@reduxjs/toolkit";
import productSlice from './reducers/productSlice'
import whislistSlice from './reducers/whislistSlice'
export const store=configureStore({
    reducer:{
        products:productSlice,
        whislist:whislistSlice
    }
})