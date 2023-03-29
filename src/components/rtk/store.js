import { configureStore } from "@reduxjs/toolkit";
import fetchedDetail from "./fetchedDetail";
import blogsReducer from "./blogSlice.js";

const store = configureStore({
  reducer: {
    blog: blogsReducer,
    credential: fetchedDetail,
  },
});

export default store;
