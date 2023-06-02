import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "./SliceOfRedux/LoginSlice";
import EditProfile from "./SliceOfRedux/EditProfile";
import UserId from "./SliceOfRedux/UserId";
const rootReducer = combineReducers({
  LoginSlice,
  EditProfile,
  UserId
  
});
export default rootReducer