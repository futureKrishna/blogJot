import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allblogs: [],
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setAllBlogs: (state, action) => {
      state.allblogs = action.payload;
    },
  },
});

export default blogSlice.reducer;
export const { setAllBlogs } = blogSlice.actions;
