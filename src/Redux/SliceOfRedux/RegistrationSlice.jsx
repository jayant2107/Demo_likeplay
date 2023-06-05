import { createSlice } from "@reduxjs/toolkit";

 const RegistrationCount=createSlice({
    name:'RegCount ',
    initialState:{
        count:0
    },
    reducers:{
        countAdd:(state,action)=>{
            if(action?.payload){
                state.count = action?.payload;
            }
        },
        countMinus:(state,action)=>{
            if(action?.payload){
                state.count = action?.payload;
            }
        },
    }
 })
 export const {countAdd,countMinus}=RegistrationCount.actions
 export default RegistrationCount.reducer