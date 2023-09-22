import { PageLoader } from "widgets/PageLoader";
import { useGetMoviesQuery } from "widgets/api/moviesApi";
import { Link } from "react-router-dom";
import s from "./Main.module.scss";

interface MovieInfo {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
    Released: string
    Director: string
    Actors: string
    Plot: string
    Country: string
    imdbRating: string
    BoxOffice: string
  }

const Main = () => {
  const { data, isLoading } = useGetMoviesQuery([]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
      <div className={s.main}>
          {data.Search.map((film: MovieInfo) => (
              <Link className={s.picture} key={film.imdbID} to={`/${film.imdbID}`}>
                  <img className={s.img} src={film.Poster} alt={film.Title} />
              </Link>
          ))}
      </div>
  );
};

export default Main;
