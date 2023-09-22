import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { API_KEY } = process.env;
const baseUrl = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getMovies: build.query({
      query: () => ({
        url: `${baseUrl}&s=computer`,
      }),
    }),
    getById: build.query({
      query: (id) => ({
        url: `${baseUrl}&i=${id}`,
      }),
    }),
    getByParams: build.query({
      query: (params) => ({
        url: `${baseUrl}&s=${params}`,
        // params: { limit, name },
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetByIdQuery, useGetByParamsQuery } = moviesApi;
