import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authMiddleware } from "features/Auth";
import { authReducer } from "features/Auth/model";
import { favoritesApi } from "features/FirebaseDB/model/services/favoritesApi";
import { historyApi } from "features/Search/services/historyApi";
import { moviesApi } from "widgets/api/moviesApi";
import { serverApi } from "widgets/api/serverApi";

const rootReducer = combineReducers({
  auth: authReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
  [favoritesApi.reducerPath]: favoritesApi.reducer,
  [historyApi.reducerPath]: historyApi.reducer,
  [serverApi.reducerPath]: serverApi.reducer,

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    moviesApi.middleware,
    favoritesApi.middleware,
    historyApi.middleware,
    serverApi.middleware,
    authMiddleware,
  ],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
