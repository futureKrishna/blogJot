import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: ""
};

const credentialSlice = createSlice({
  name: "logincred",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.email=action.payload.email
      state.id=action.payload.id
    }
  },
});

export default credentialSlice.reducer;
export const {setUserDetails} = credentialSlice.actions;
