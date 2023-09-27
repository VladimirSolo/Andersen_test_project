import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetMoviesQuery } from "widgets/api/moviesApi";
import { PageLoader } from "widgets/PageLoader";
import { Pagination } from "widgets/Pagination";
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
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetMoviesQuery(page);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    data?.Search ? (
        <>
            <div className={s.main}>
                {data?.Search.map((film: MovieInfo) => (
                    <Link className={s.picture} key={film.imdbID} to={`/${film.imdbID}`}>
                        <img className={s.img} src={film.Poster} alt={film.Title} />
                    </Link>
                ))}
            </div>
            <Pagination page={page} setPage={setPage} />
        </>
    ) : <p className={s.not}>Films not found</p>
  );
};

export default Main;
