import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "LoginCreatia",
  initialState: {
    data: null,
    tempData : null,
  },
  reducers: {
    ValidUser: (state, action) => {
      if (action?.payload) {
        state.data = action.payload;
      }
    },
    TempValidUser: (state, action)=>{
      if(action?.payload){
        state.tempData = action.payload
      }
    },
    Logout : (state, action) => {
      if (action?.payload === null) {
        state.data = action.payload;
      }
    },
  },
});
export const { ValidUser, TempValidUser, Logout} = LoginSlice.actions;
export default LoginSlice.reducer;
