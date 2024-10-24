import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filters: {
    category: [], // should this be an array allowing multiple cats?
    price: [],
    sizes: [],
  },
  filteredProducts: "",
  selectedFilter: {
    categories: [],
    sizes: [],
    prices: "",
  },
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
    setFilteredProducts(state, action) {
      state.filteredProducts = action.payload;
    },
    setAllFilters(state, action) {
      const { name, value } = action.payload;

      if (name === "categories") {
        const categoryExists = state.selectedFilter.categories.includes(value);

        // If category is already selected, remove it; if not, add it
        if (categoryExists) {
          state.selectedFilter.categories =
            state.selectedFilter.categories.filter(
              (category) => category !== value
            );
        } else {
          state.selectedFilter.categories.push(value);
        }
      }
    },
  },
});

export const {
  addProducts,
  setCategoryFilter,
  setPriceFilter,
  setSizeFilter,
  setAllFilters,
  setFilteredProducts,
} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = (state) => state.products?.products;
export const getCategoryFilter = (state) => state.products.filters.category;
export const getPriceFilter = (state) => state.products.filters.price;
export const getSizeFilter = (state) => state.products.filters.sizes;

export const filterByCategory = () => (state) => {
  const selectedCategories = state.products.selectedFilter.categories;

  // If no categories are selected, return all products
  if (!selectedCategories.length) return state.products.products;

  // Return only products that match at least one of the selected categories
  return state.products.products.filter((product) =>
    selectedCategories.some((category) => product.categories.includes(category))
  );
};
