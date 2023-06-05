import { createSlice } from "@reduxjs/toolkit";


export const Userinfo=createSlice({
    name:"userinfo",
    initialState:{
        data:null
    },
    reducers:{
        info:(state,action)=>{
            state.data=action.payload;
        }
    }
})
export const {info}=Userinfo.actions;
export default Userinfo.reducer;