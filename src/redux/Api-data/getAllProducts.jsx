import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from "axios";

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
  try {
    const response = await axios.post('https://localhost:7269/api/UIProduct/AllProductUI');
    // console.log(response.data)
    return response?.data?.$values;
  } catch (error) {
    console.log(error)
    throw error;
  }
});

const initialState = {
  product: [],
  isLoading: false,
  error: null,
}


const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  }

  ,
})

export default allProductsSlice.reducer;