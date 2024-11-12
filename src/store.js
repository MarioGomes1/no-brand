import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/categories/categorySlice";
import productSlice from "./features/filter/productSlice";

import { enableMapSet } from "immer";
import cartSlice from "./features/cart/cartSlice";

enableMapSet();
const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    cart: cartSlice,
  },
});

export default store;
