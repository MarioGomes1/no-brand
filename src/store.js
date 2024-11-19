import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/categories/categorySlice";
import productSlice from "./features/filter/productSlice";

import { enableMapSet } from "immer";
import cartSlice from "./features/cart/cartSlice";
import userSlice from "./features/authentication/userSlice";

enableMapSet();
const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    cart: cartSlice,
    user: userSlice,
  },
});

export default store;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2I1N2MwMWMyMTIwMGFkMzIyZDM3ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MzE5NDIzNTYsImV4cCI6MTczMjExNTE1Nn0.SE5xvycd7zDfk5fCoOA4jKq_jdfYLI7rMnfOeqJMmEk
