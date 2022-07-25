import { createSlice } from "@reduxjs/toolkit";
export const UserSlice = createSlice({
    name: "Email",
    initialState: {
      isAuthenticated: false
    },
    reducers: {
      login: (state) => {
        state.isAuthenticated = true;
        console.log("LOGIN", state);
      },
      logout: (state) => {
        state.isAuthenticated = false;
      }
    }
  });

  export const { login, logout } = UserSlice.actions;
  export default UserSlice.reducer;