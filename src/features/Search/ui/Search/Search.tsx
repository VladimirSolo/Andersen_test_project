import { Link } from "react-router-dom";
import { useTypedSelector } from "app/providers/store/config/hooks";
import s from "./Search.module.scss";

const Search = () => {
  const movies = useTypedSelector((state) => state.search.movies);

  return (
    movies
      ? (
          <div className={s.search}>
              {movies.map((film) => (
                  <Link className={s.picture} key={film.imdbID} to={`/${film.imdbID}`}>
                      <img className={s.img} src={film.Poster} alt={film.Title} />
                  </Link>
              ))}
          </div>
      )
      : <p className={s.found}>Films not found</p>
  );
};
export default Search;
