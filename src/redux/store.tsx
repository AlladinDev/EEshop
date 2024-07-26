import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProductSlice from './products/productSlice'
const RootReducer = combineReducers({
    productStore: ProductSlice
})
export type RootState = ReturnType<typeof RootReducer>;

const store = configureStore({
    reducer: RootReducer
})
export default store
