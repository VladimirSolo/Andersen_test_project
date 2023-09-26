import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface TelegramFlag {
  isTelegramShareEnabled: boolean;
}

const baseUrl = "http://localhost:8000";

export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getFeatureTelegramFlag: build.query<TelegramFlag, void>({
      query: () => ({
        url: "/api/feature-flags",
      }),
    }),
  }),
});

export const { useGetFeatureTelegramFlagQuery } = serverApi;
