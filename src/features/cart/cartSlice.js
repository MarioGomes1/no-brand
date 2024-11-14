import { createSlice, current } from "@reduxjs/toolkit";

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
      //TODO change where it's searching for the id since the size is appended to it.
      const duplicateProduct = state.cart.find(
        (p) => p.id === action.payload.id
      );
      // const duplicateSize = state.cart.find(
      //   (p) => p.selectedSize === action.payload.selectedSize
      // );
      // || !duplicateSize
      if (!duplicateProduct) {
        state.cart.push({ ...action.payload, quantity: 1, totalPrice: 49 });
      } else {
        cartSlice.caseReducers.increaseQuantity(state, {
          payload: action.payload.id,
        });
      }
    },
    deleteItem(state, action) {
      //TODO only delete if both size and id matches? or should i append size to the id?
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.price * item.quantity;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.price * item.quantity;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
  },
});

export default cartSlice.reducer;
export const { addItem, increaseQuantity, decreaseQuantity, deleteItem } =
  cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getCartTotal = (state) =>
  state.cart.cart.reduce((acc, curr) => curr.totalPrice + acc, 0);
