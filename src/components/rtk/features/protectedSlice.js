import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export default loginSlice.reducer;
export const { setIsLoggedIn } = loginSlice.actions;
