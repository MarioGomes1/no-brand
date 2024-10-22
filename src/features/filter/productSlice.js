import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filters: {
    category: [], // should this be an array allowing multiple cats?
    price: "",
    sizes: [],
  },
  selectedFilter: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.products = action.payload;
    },
    setCategoryFilter(state, action) {
      const category = action.payload;
      console.log(action.payload);
      // Check if the category already exists in the filter array
      if (!state.filters.category.includes(category)) {
        state.filters.category = [...state.filters.category, category]; // Add category immutably
      }
    },
    setPriceFilter(state, action) {
      state.filters.price = action.payload;
    },
    setSizeFilter(state, action) {
      state.filters.sizes.push(action.payload);
    },
  },
});

export const { addProducts, setCategoryFilter, setPriceFilter, setSizeFilter } =
  productSlice.actions;
export default productSlice.reducer;

export const getProducts = (state) => state.products;
