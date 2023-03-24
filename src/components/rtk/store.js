import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/protectedSlice.js";
import userReducer from "./features/userSlice.js";
import blogsReducer from "./features/blogSlice.js";

const store = configureStore({
  reducer: {
    login: loginReducer,
    users: userReducer,
    blog: blogsReducer,
  },
});

export default store;
