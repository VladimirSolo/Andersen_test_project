import { useEffect } from "react";
import { favoritesApi } from "features/FirebaseDB/model/services/favoritesApi";
import { useTypedSelector } from "app/providers/store/config/hooks";
import { useNavigate, useParams } from "react-router-dom";
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
  const { uid } = useTypedSelector((state) => state.auth.user);
  const { id } = useParams();
  const navigate = useNavigate();

  const [getFavoritesMovies, { data: favoriteFilms }] = favoritesApi.useLazyGetFavoritesMoviesQuery();
  const [addMovieToFavorites] = favoritesApi.useAddMovieMutation();
  const [removeMovieFromFavorites] = favoritesApi.useRemoveMovieMutation();

  const { data: oneFilm } = useGetByIdQuery(id);

  const movie: MovieInfo = {
    Title: oneFilm.Title,
    Year: oneFilm.Year,
    imdbID: oneFilm.imdbID,
    Type: oneFilm.Type,
    Poster: oneFilm.Poster,
  };

  const addFilm = () => {
    if (uid) {
      addMovieToFavorites(movie);
    } else {
      navigate("/login");
    }
  };

  const isFavorite = favoriteFilms?.find(
    (item) => item?.imdbID === id,
  )?.idDB;

  const removeFilm = () => {
    removeMovieFromFavorites(isFavorite);
  };

  useEffect(() => {
    if (uid) {
      getFavoritesMovies();
    }
  }, [uid, getFavoritesMovies]);

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
