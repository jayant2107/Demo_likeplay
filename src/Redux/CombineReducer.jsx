import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "./SliceOfRedux/LoginSlice";
import EditProfile from "./SliceOfRedux/EditProfile";
import UserId from "./SliceOfRedux/UserId";
import Userinfo from './SliceOfRedux/Userinfo'
import FormData from "./SliceOfRedux/FormDataSlice"
import RegistrationSlice from "./SliceOfRedux/RegistrationSlice";
const rootReducer = combineReducers({
  LoginSlice,
  EditProfile,
  UserId,
  Userinfo,
 

  
  FormData,
  RegistrationSlice
});
export default rootReducer