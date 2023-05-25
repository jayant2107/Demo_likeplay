import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "./SliceOfRedux/LoginSlice";
import EditProfile from "./SliceOfRedux/EditProfile";
const rootReducer = combineReducers({
  LoginSlice,
  EditProfile
  
});
export default rootReducer