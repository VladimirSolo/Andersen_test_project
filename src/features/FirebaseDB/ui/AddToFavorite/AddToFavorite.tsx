import { favoritesApi } from "features/FirebaseDB/model/services/favoritesApi";
import { useParams } from "react-router-dom";
import { useGetByIdQuery } from "widgets/api/moviesApi";
import s from "./AddToFavorite.module.scss";

interface MovieInfo {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
  }

export function AddToFavorite() {
  const { id } = useParams();

  const [addMovieToFavorites] = favoritesApi.useAddMovieMutation();
  const [removeMovieFromFavorites] = favoritesApi.useRemoveMovieMutation();
  const { data: favoriteFilms } = favoritesApi.useGetFavoritesMoviesQuery();

  const { data: oneFilm } = useGetByIdQuery(id);

  const movie: MovieInfo = {
    Title: oneFilm.Title,
    Year: oneFilm.Year,
    imdbID: oneFilm.imdbID,
    Type: oneFilm.Type,
    Poster: oneFilm.Poster,
  };

  const addFilm = () => {
    addMovieToFavorites(movie);
  };

  const isFavorite = favoriteFilms?.find(
    (item) => item?.imdbID === id,
  )?.idDB;

  const removeFilm = () => {
    removeMovieFromFavorites(isFavorite);
  };

  return (
      <div className="">
          {!isFavorite
            ? (
                <button type="button" onClick={addFilm} className={`${s.add} ${s.favbtn}`}>
                    Add to favorites
                </button>
            )
            : (
                <button type="button" onClick={removeFilm} className={`${s.delete} ${s.favbtn}`}>
                    Delete from favorites
                </button>
            )}
      </div>
  );
}
