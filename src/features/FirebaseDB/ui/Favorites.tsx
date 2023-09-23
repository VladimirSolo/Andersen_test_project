import { useEffect, useState } from "react";
import { favoritesApi } from "features/FirebaseDB/model/services/favoritesApi";
import { Link } from "react-router-dom";
import s from "./Favorites.module.scss";

const Favorites = () => {
  const [getFavoritesMovies, { data: favoriteFilms }] = favoritesApi.useLazyGetFavoritesMoviesQuery();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (favoriteFilms) {
      const filmsFromDB = Object.keys(favoriteFilms).map((key) => favoriteFilms[key]);
      setFilms(filmsFromDB);
    }
  }, [favoriteFilms]);

  useEffect(() => {
    getFavoritesMovies();
  }, [getFavoritesMovies]);

  return (
      <div className={s.favorites}>
          {films.map((film) => (
              <Link className={s.picture} key={film.imdbID} to={`/${film.imdbID}`}>
                  <img className={s.img} src={film.Poster} alt={film.Title} />
              </Link>
          ))}
      </div>
  );
};

export default Favorites;
