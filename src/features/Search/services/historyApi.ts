import { createApi } from "@reduxjs/toolkit/query/react";

import { dynamicBaseQuery } from "widgets/api/config/baseApi";
import { transformHistory } from "./transform/transformResponse";

interface History {
  name: string,
  id: string
}
interface Query {
  name: string,
}

export const historyApi = createApi({
  reducerPath: "historyApi",
  baseQuery: dynamicBaseQuery,
  tagTypes: ["History"],
  endpoints: (build) => ({
    getHistory: build.query<History[], void>({
      query: () => ({
        url: "history.json",
      }),
      transformResponse: transformHistory,
      providesTags: ["History"],
    }),
    addHistory: build.mutation<void, Query>({
      query: ({ name }) => ({
        url: "history.json",
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["History"],
    }),
    removeHistory: build.mutation({
      query: ({ id }) => ({
        url: `history/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["History"],
    }),
    removeAllHistory: build.mutation<void, void>({
      query: () => ({
        url: "history.json",
        method: "DELETE",
      }),
      invalidatesTags: ["History"],
    }),
  }),
});
