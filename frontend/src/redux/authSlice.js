import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // This should be serializable
  isAuthenticated: false, // Optional flag to simplify ProtectedRoute logic
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true; // Mark user as authenticated
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false; // Reset user on logout
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
