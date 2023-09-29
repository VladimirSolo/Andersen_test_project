import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { API_KEY } = process.env;
const baseUrl = `http://www.omdbapi.com/?apikey=${API_KEY}`;

interface MovieInfo {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Released: string;
  Director: string;
  Actors: string;
  Plot: string;
  Country: string;
  imdbRating: string;
  BoxOffice: string;
}

interface Movie {
  Search: MovieInfo[];
  totalResults: string
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getMovies: build.query<Movie, number | void>({
      query: (page = 1) => ({
        url: `${baseUrl}&s=computer&page=${page}`,
      }),
    }),
    getSearchMovies: build.query<Movie, string>({
      query: (search) => ({
        url: `${baseUrl}&s=${search}`,
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
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery, useGetByIdQuery, useGetByParamsQuery, useGetSearchMoviesQuery,
} = moviesApi;
