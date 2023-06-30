import { combineReducers } from "@reduxjs/toolkit";

import EditProfile from "./SliceOfRedux/EditProfile";
import UserId from "./SliceOfRedux/UserId";
import Sidebar from "./SliceOfRedux/Sidebar";
import Userinfo from './SliceOfRedux/Userinfo'

import RegistrationSlice from "./SliceOfRedux/RegistrationSlice";
const rootReducer = combineReducers({

  EditProfile,
  UserId,
  Userinfo,
  Sidebar,
  
 

  

  RegistrationSlice
});
export default rootReducer