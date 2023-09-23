import { Link } from "react-router-dom";
import { useTypedSelector } from "app/providers/store/config/hooks";
import s from "./Search.module.scss";

const Search = () => {
  const movies = useTypedSelector((state) => state.search.movies);

  return (
      <div className={s.search}>
          {movies.map((film) => (
              <Link className={s.picture} key={film.imdbID} to={`/${film.imdbID}`}>
                  <img className={s.img} src={film.Poster} alt={film.Title} />
              </Link>
          ))}
      </div>
  );
};
export default Search;
