import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './Api-data/ProductsSlice.jsx'
// import allProductsReducer from './Api-data/allProductsSlice.jsx'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        allProducts: productsReducer,
    },
})