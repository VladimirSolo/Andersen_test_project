import { useEffect } from "react";
import { favoritesApi } from "features/FirebaseDB/model/services/favoritesApi";
import { Link } from "react-router-dom";
import s from "./Favorites.module.scss";

const Favorites = () => {
  const [getFavoritesMovies, { data: favoriteFilms }] = favoritesApi.useLazyGetFavoritesMoviesQuery();

  useEffect(() => {
    getFavoritesMovies();
  }, [getFavoritesMovies]);

  return (
    !favoriteFilms
      ? (
          <div className={s.info}>Please add movies</div>
      )
      : (
          <div className={s.favorites}>
              {favoriteFilms.map((film) => (
                  <Link className={s.picture} key={film.imdbID} to={`/${film.imdbID}`}>
                      <img className={s.img} src={film.Poster} alt={film.Title} />
                  </Link>
              ))}
          </div>
      )
  );
};

export default Favorites;
