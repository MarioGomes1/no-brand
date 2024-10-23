import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filters: {
    category: [], // should this be an array allowing multiple cats?
    price: [],
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
      state.filters.category = [category];
    },
    setPriceFilter(state, action) {
      state.filters.price = [action.payload];
    },
    setSizeFilter(state, action) {
      state.filters.sizes = [action.payload];
    },
  },
});

export const { addProducts, setCategoryFilter, setPriceFilter, setSizeFilter } =
  productSlice.actions;
export default productSlice.reducer;

export const getProducts = (state) => state.products?.products;
export const getCategoryFilter = (state) => state.products.filters.category;
export const getPriceFilter = (state) => state.products.filters.price;
export const getSizeFilter = (state) => state.products.filters.sizes;

export const filterByCategory = (category) => (state) => {
  if (!category) return state.products.products; // If no category, return all products
  return state.products.products.filter((product) =>
    product.categories.includes(category)
  );
};
