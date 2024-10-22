import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/categories/categorySlice";
import productSlice from "./features/filter/productSlice";

import { enableMapSet } from "immer";

enableMapSet();
const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
  },
});

export default store;
