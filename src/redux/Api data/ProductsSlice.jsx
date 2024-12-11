import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API URL'si
const url = 'https://localhost:7269/api';

// API'den ürünleri getiren asyncThunk
export const getAllProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.post(`${url}/UIProduct/AllProductUI`);
    return response?.data.$values; // API yanıtından veriyi al
  } catch (error) {
    throw error;
  }
});

// Redux slice'ı
const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ProductsSlice.reducer;
