import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProductThunk = createAsyncThunk("getproducts", async () => {
  const response = await axios.get("http://localhost:5501/products");
  return response.data;
});
export const postProductThunk = createAsyncThunk("postproducts", async (data) => {
  const response = await axios.post("http://localhost:5501/products", data);
  return response.data;
});
export const deleteProductThunk = createAsyncThunk("deleteproducts", async (id) => {
  const response = await axios.delete(`http://localhost:5501/products/${id}`);
  return id;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  extraReducers: (builder) => {
    builder

    .addCase(getProductThunk.fulfilled,(state,action)=>{
        state.products=action.payload
        state.loading=false
    })
    .addCase(getProductThunk.pending,(state)=>{
        state.loading=true
    })
    .addCase(getProductThunk.rejected,(state,action)=>{
        state.error=action.error
        state.loading=false
    })
    .addCase(postProductThunk.fulfilled,(state,action)=>{
        state.products.push(action.payload)
        state.loading=false
    })
    .addCase(postProductThunk.pending,(state)=>{
        state.loading=true
    })
    .addCase(postProductThunk.rejected,(state,action)=>{
        state.error=action.error
        state.loading=false
    })
    .addCase(deleteProductThunk.fulfilled,(state,action)=>{
        state.products=state.products.filter(item=>item._id !== action.payload)
        state.loading=false
    })
    .addCase(deleteProductThunk.pending,(state)=>{
        state.loading=true
    })
    .addCase(deleteProductThunk.rejected,(state,action)=>{
        state.error=action.error
        state.loading=false
    })

  }
});


export default productSlice.reducer