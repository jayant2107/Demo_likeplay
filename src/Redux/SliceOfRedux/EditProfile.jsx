import { createSlice } from "@reduxjs/toolkit";

 const EditProfile=createSlice({
    name:'Edit Profile',
    initialState:{
        count:0
    },
    reducers:{
        Countvalue:(state,action)=>{
            state.count=action.payload

        }
    }
 })
 export const {Countvalue}=EditProfile.actions


 export default EditProfile.reducer