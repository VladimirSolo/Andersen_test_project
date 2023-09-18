import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "features/Auth/model";

interface User {
  user: {
    uid: string;
    refreshToken: string;
  }
}

export interface StateStore {
    auth: User;
}

const rootReducer = combineReducers<StateStore>({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
  ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
