import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API URL'si
const url = 'https://localhost:7269/api';
// const token = localStorage.getItem('token');
// API'den ürünleri getiren asyncThunk
export const getAllCategories = createAsyncThunk('products/getAllCategories',
  async (token) => {
    const headers = {
      'Authorization': `Bearer ${token}`,
    };
    try {
      const response = await axios.get(`${url}/Category/GetAllCategory`, { headers });
      return response?.data; // API yanıtından veriyi al
    } catch (error) {
      throw error;
    }
  });


// Redux slice'ı
const productsSlice  = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
