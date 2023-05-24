import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "LoginCreatia",
  initialState: {
    data:null
  },
  reducers: {
    ValidUser: (state, action) => {
    state.data=action.payload
    },
  },
});
export const { ValidUser } = LoginSlice.actions;
export default LoginSlice.reducer;
