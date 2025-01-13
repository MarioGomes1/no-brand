import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserCart } from "../../services/apiCart";

export const fetchCart = createAsyncThunk(
  "/cart/fetchCart",
  async (_, { getState }) => {
    console.log(getState().user);
    try {
      const token = getState().user.accessToken;
      const data = await getUserCart(token);
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
);

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
        (p) =>
          p.id === action.payload.id &&
          p.selectedSize === action.payload.selectedSize
      );

      if (!duplicateProduct) {
        state.cart.push({ ...action.payload, quantity: 1, totalPrice: 49 });
      } else {
        cartSlice.caseReducers.increaseQuantity(state, {
          payload: action.payload,
        });
      }
    },
    deleteItem(state, action) {
      //TODO only delete if both size and id matches? or should i append size to the id?
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize
      );
      console.log(item);
      item.quantity++;
      item.totalPrice = item.price * item.quantity;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize
      );
      item.quantity--;
      item.totalPrice = item.price * item.quantity;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      console.log(action.payload);
      state.cart = action.payload;
    });
  },
});

export default cartSlice.reducer;
export const { addItem, increaseQuantity, decreaseQuantity, deleteItem } =
  cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getCartTotal = (state) =>
  state.cart.cart.reduce((acc, curr) => curr.totalPrice + acc, 0);
