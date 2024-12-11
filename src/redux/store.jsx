import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './Api data/ProductsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
})