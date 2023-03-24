import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userDetails: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export default loginSlice.reducer;
export const { setIsLoggedIn, setUserDetails } = loginSlice.actions;
