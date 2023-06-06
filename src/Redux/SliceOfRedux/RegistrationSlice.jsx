import { createSlice } from "@reduxjs/toolkit";

 const RegistrationCount=createSlice({
    name:'RegCount ',
    initialState:{
        count:0,
        attributestatus : null,
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
        attributeStatus:(state,action)=>{
            if(action?.payload){
                state.attributestatus = action?.payload;
            }
        }
    }
 })
 export const {countAdd,countMinus,attributeStatus}=RegistrationCount.actions
 export default RegistrationCount.reducer