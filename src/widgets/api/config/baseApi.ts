import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query/react";
import { RootState } from "app/providers/store/config/store";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "https://auth-9941a-default-rtdb.firebaseio.com/",
});

export const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const {
    auth: { user: { uid } },
  } = api.getState() as RootState;

  if (!uid) {
    return {
      error: {
        status: 400,
        statusText: "Bad Request",
        data: "UID NOT FOUND",
      },
    };
  }

  const urlEnd = typeof args === "string" ? args : args.url;
  const adjustedUrl = `${uid}/${urlEnd}`;
  const adjustedArgs = typeof args === "string" ? adjustedUrl : { ...args, url: adjustedUrl };

  return rawBaseQuery(adjustedArgs, api, extraOptions);
};
