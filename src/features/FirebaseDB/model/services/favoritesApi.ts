import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://auth-9941a-default-rtdb.firebaseio.com/";

interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface Favorite {
  [key: string]: Movie;
}

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Favorites"],
  endpoints: (build) => ({
    getFavoritesMovies: build.query<Favorite, void>({
      query: () => ({
        url: "favorites.json",
      }),
      providesTags: ["Favorites"],
    }),
    addMovie: build.mutation({
      query: (movie) => ({
        url: "favorites.json",
        method: "POST",
        body: movie,
      }),
      invalidatesTags: ["Favorites"],
    }),
    removeMovie: build.mutation({
      query: (key) => ({
        url: `favorites/${key}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favorites"],
    }),
    removeAllFavorites: build.mutation({
      query: () => ({
        url: "favorites.json",
        method: "DELETE",
      }),
      invalidatesTags: ["Favorites"],
    }),
  }),
});
