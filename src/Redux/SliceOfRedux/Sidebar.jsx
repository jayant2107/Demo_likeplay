import { createSlice } from "@reduxjs/toolkit";

export const Sidebar=createSlice({
    name:"sidebar",
    initialState:{
        sidebarstate:null,
    },
   reducers:{
    opensidebar:(state,action)=>{
        state.sidebarstate=action.payload
    }
   }
})

export const {opensidebar}=Sidebar.actions
export default Sidebar.reducer;