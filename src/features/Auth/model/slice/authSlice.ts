import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  signup,
  logout,
} from "../actions/authThunk";

type Status = "idle" | "pending" | "succeeded" | "failed";

export interface User {
  user: {
    uid: string;
    refreshToken: string;
  }
  success: Status,
}

const initialState: User = {
  success: "idle",
  user: {
    uid: null,
    refreshToken: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // TODO!! logic for localstorage
    setUser(state, action) {
      state.user = action.payload;
    },
    deleteUser(state) {
      state.user.refreshToken = null;
      state.user.uid = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.success = "pending";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.success = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.success = "failed";
    })
      .addCase(signup.pending, (state) => {
        state.success = "pending";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.success = "succeeded";
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state) => {
        state.success = "failed";
      })
      .addCase(logout.pending, (state) => {
        state.success = "pending";
      })
      .addCase(logout.fulfilled, (state) => {
        state.success = "succeeded";
      })
      .addCase(logout.rejected, (state) => {
        state.success = "failed";
      });
  },
});

export default userSlice;
