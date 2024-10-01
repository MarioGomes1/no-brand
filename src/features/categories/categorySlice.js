import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    toggleCategories(state, action) {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { toggleCategories } = categorySlice.actions;

export default categorySlice.reducer;
