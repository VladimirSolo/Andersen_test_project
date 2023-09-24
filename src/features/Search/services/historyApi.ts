import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://auth-9941a-default-rtdb.firebaseio.com/";

interface History {
  name: string,
  id: string
}
interface Query {
  name: string,
}

export const historyApi = createApi({
  reducerPath: "historyApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["History"],
  endpoints: (build) => ({
    getHistory: build.query<History[], void>({
      query: () => ({
        url: "history.json",
      }),
      transformResponse: (data): History[] => {
        let history: History[] = [];
        if (data) {
          history = Object.entries(data).map((item) => ({
            id: item[0],
            name: item[1].name,
          }));
        }
        return history;
      },
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
