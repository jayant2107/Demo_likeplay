import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  age: null,
  gender: null,
  interestedIn: null,
  status: null,
  bodytype: null,
  height: null,
  education: null,
  employment: null,
  country: null,
  state:null,
  city: null,
  nationality: null,
  religion: null,
  tribe: null,
  ageRange: null,
  tribeTodate: null,
  lookingfor: null,
  irrelevant: null,
  aboutme: null,
};

export const FromDataSlice = createSlice({
  name: "fromdata",
  initialState,
  reducers: {
    page2 : (state, action) => {
        if (action?.payload) {
        state.name = action.payload?.name;
        state.age = action.payload?.age;
        state.gender = action.payload?.gender;
        state.interestedIn = action.payload?.interest;
      }
    },
    page3 : (state,action) =>{
        if(action?.payload){
            state.status = action.payload?.status;
            state.bodytype = action.payload?.bodytype;
            state.height = action.payload?.height;
            state.education = action.payload?.education;
            state.employment = action.payload?.employment;
        }
    },
    page4 : (state,action) =>{
        if(action?.payload){
            state.country = action.payload?.country;
            state.state = action.payload?.state;
            state.city = action.payload?.city;
            state.nationality = action.payload?.nationality;
            state.religion = action.payload?.religion;
            state.tribe = action.payload?.tribe;
        }
    },
    page5 : (state,action) => {
        if(action?.payload){
            state.ageRange = action.payload?.ageRange;
            state.tribeTodate = action.payload?.tribeTodate;
            state.lookingfor = action.payload?.lookingfor;
            state.irrelevant = action.payload?.irrelevant;
        }
    },
    page6 : (state,action) => {
        if(action?.payload){
            state.aboutme = action.payload?.aboutme;
        }
    }
  },
});

export const { page2, page3, page4, page5, page6 } = FromDataSlice.actions;
export default FromDataSlice.reducer;
