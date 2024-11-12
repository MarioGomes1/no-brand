import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  // cart: [
  //   {
  //     ItemId: 1,
  //     name: "item name",
  //     quantity: 1,
  //     unitPrice: 12,
  //     totalProce: 15,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    increaseQuantity(state, action) {
      console.log(action.payload);
    },
    decreaseQuantity(state, action) {},
  },
});

export default cartSlice.reducer;
export const { addItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getCartTotal = (state) =>
  state.cart.cart.reduce((acc, curr) => curr.price + acc, 0);
// const test = cart.reduce((acc, curr) => curr.price + acc, 0);
