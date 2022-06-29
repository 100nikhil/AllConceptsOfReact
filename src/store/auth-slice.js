import { createSlice } from "@reduxjs/toolkit";

let token = localStorage.getItem('token');

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: !!token, msg:"" },
  reducers:{
    logMeIn(state){
      state.isLoggedIn = true;
      state.msg = "Yes you're logged in now";
    },
    logMeOut(state){
      state.isLoggedIn = false;
      state.msg = "Yes you're logged out now";
    }
  }
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;