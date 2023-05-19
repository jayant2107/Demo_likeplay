import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "./SliceOfRedux/LoginSlice";
const rootReducer = combineReducers({
  LoginSlice,
});
export default rootReducer