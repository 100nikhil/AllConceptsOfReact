import { createSlice } from "@reduxjs/toolkit";

let token = localStorage.getItem('token');

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: !!token },
  reducers:{
    logMeIn(state){
      state.isLoggedIn = true;
    },
    logMeOut(state){
      state.isLoggedIn = false;
    }
  }
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;