import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";

import { auth } from "firebase";

interface Data {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: Data, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return response.user;
    } catch (error) {
      return thunkAPI.rejectWithValue("Invalid login or password");
    }
  },
);

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password }: Data, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return response.user;
    } catch (err) {
      return thunkAPI.rejectWithValue("This user already exists");
    }
  },
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await signOut(auth);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue("Some problem with logout");
    }
  },
);
