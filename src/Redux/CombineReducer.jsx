import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "./SliceOfRedux/LoginSlice";
import EditProfile from "./SliceOfRedux/EditProfile";
import UserId from "./SliceOfRedux/UserId";
import Userinfo from './SliceOfRedux/Userinfo'
const rootReducer = combineReducers({
  LoginSlice,
  EditProfile,
  UserId,
  Userinfo
 

  
});
export default rootReducer