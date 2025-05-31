import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWhislistThunk = createAsyncThunk("getWhislist", async () => {
  const response = await axios.get("http://localhost:5501/whislist");
  return response.data;
});

export const postWhislistThunk = createAsyncThunk("postWhislist", async (data) => {
  const response = await axios.post("http://localhost:5501/whislist", data);
  return response.data;
});

export const deleteWhislistThunk = createAsyncThunk("deleteWhislist", async (id) => {
  await axios.delete(`http://localhost:5501/whislist/${id}`);
  return id;
});

const whislistSlice = createSlice({
  name: "whislist",
  initialState: {
    whislist: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWhislistThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWhislistThunk.fulfilled, (state, action) => {
        state.whislist = action.payload;
        state.loading = false;
      })
      .addCase(getWhislistThunk.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })

      .addCase(postWhislistThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postWhislistThunk.fulfilled, (state, action) => {
        state.whislist.push(action.payload);
        state.loading = false;
      })
      .addCase(postWhislistThunk.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })

      .addCase(deleteWhislistThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteWhislistThunk.fulfilled, (state, action) => {
        state.whislist = state.whislist.filter(item => item._id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteWhislistThunk.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  }
});

export default whislistSlice.reducer;
