import { Link, useLocation } from "react-router-dom";
import { useGetSearchMoviesQuery } from "widgets/api/moviesApi";
import { PageLoader } from "widgets/PageLoader";
import s from "./Search.module.scss";

const Search = () => {
  const location = useLocation();
  const name = location.search.split("=")[1];

  const { data: movies, isLoading } = useGetSearchMoviesQuery(name);

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    movies
      ? (
          <div className={s.search}>
              {movies.Search.map((film) => (
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
