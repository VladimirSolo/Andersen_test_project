import { favoritesApi } from "features/FirebaseDB/model/services/favoritesApi";
import { useNavigate, useParams } from "react-router-dom";
import { useGetByIdQuery } from "widgets/api/moviesApi";
import { getUser } from "features/Auth/model/selector/getUser";
import { useTypedSelector } from "app/providers/store/config/hooks";
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
  const isAuth = useTypedSelector(getUser);
  const navigate = useNavigate();

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

  const handleGoLogin = () => {
    navigate("/login");
  };

  return (
    isAuth
      ? (
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
      )
      : (
          <button type="button" onClick={handleGoLogin} className={`${s.add} ${s.favbtn}`}>
              Add to favorites
          </button>
      )
  );
}
