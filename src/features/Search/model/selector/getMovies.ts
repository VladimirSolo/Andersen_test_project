import { RootState } from "app/providers/store/config/store";

export const getMovies = (state: RootState) => state.search.movies;
