import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBlogs: [],
  isLoading: false,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setAllBlogs: (state, action) => {
      state.allBlogs = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default blogSlice.reducer;
export const { setAllBlogs, setIsLoading } = blogSlice.actions;
