import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUserCredentials(state, action) {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.userInfo = user;
      state.isAuthenticated = true;
    },
  },
});
export const { setUserCredentials } = userSlice.actions;
export default userSlice.reducer;
