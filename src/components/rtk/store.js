import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/protectedSlice.js";
import userReducer from "./features/UserSlice.js";


const store = configureStore({
  reducer: {
    login: loginReducer,
    users: userReducer,
  },
});

export default store;
