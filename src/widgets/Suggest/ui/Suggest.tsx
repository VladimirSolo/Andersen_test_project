import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./Suggest.module.scss";

interface Movie {
  Title: string
  imdbID: string
  Poster: string
}

interface Props {
  movies: Movie[];
}

const Suggest = ({ movies }: Props) => (
  movies
    ? (
        <div className={s.suggest}>
            {movies.slice(0, 5).map((film) => (
                <Link className={s.linka} key={film.imdbID} to={`/${film.imdbID}`}>
                    <img className={s.imag} src={film.Poster} alt={film.Title} />
                    {film.Title}
                </Link>
            ))}
        </div>
    )
    : <p>Movies not found</p>
);

Suggest.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Suggest;
