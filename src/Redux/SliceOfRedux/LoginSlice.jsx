import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "LoginCreatia",
  initialState: { token: "" },
  reducers: {
    ValidUser: (state, action) => {
      console.log(action.payload);
      // state.token=action.payload
    },
  },
});
export default LoginSlice.reducer;
export const { ValidUser } = LoginSlice.actions;
