import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "features/Auth/model";
import { favoritesApi } from "features/FirebaseDB/model/services/favoritesApi";
import { searchReducer } from "features/Search";
import { moviesApi } from "widgets/api/moviesApi";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
  [favoritesApi.reducerPath]: favoritesApi.reducer,

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(moviesApi.middleware).concat(favoritesApi.middleware)
  ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
