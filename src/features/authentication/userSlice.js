import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    user: null,
    loading: false,
    error: null,
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
});
export default userSlice.reducer;
