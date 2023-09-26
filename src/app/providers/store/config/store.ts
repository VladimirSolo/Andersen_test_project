import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authMiddleware } from "features/Auth";
import { authReducer } from "features/Auth/model";
import { favoritesApi } from "features/FirebaseDB/model/services/favoritesApi";
import { searchReducer } from "features/Search";
import { historyApi } from "features/Search/services/historyApi";
import { moviesApi } from "widgets/api/moviesApi";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
  [favoritesApi.reducerPath]: favoritesApi.reducer,
  [historyApi.reducerPath]: historyApi.reducer,

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    moviesApi.middleware,
    favoritesApi.middleware,
    historyApi.middleware,
    authMiddleware,
  ],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
