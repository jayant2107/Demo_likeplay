import { createSlice } from "@reduxjs/toolkit";

const UserId = createSlice({
    name : 'User Id',
    initialState : {
        id : null
    },
    reducers:{
        AddUserId:(state,action)=>{
            if(action?.payload){
                state.id = action.payload;
            }
        }
    }
})
export const {AddUserId} = UserId.actions

export default UserId.reducer