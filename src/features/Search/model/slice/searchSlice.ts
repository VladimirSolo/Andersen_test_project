import { createSlice } from "@reduxjs/toolkit";

interface Movie{
  Title: string
  Year: string
  imdbID: string
  Poster: string
  Director: string
  Actors: string
  Plot: string
  Country: string
  imdbRating: string
}

const initialState: { movies: Movie[] } = {
  movies: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export default searchSlice;
