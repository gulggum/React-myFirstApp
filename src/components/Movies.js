import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

function Movies({ id, coverImg, title, rating, summary, genres }) {
  return (
    <div className={styles.movie}>
      {" "}
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt="coverImg" />
        <h2>{title}</h2>
        <h3>⭐ {rating}</h3>
        <ul className={styles.genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
}

Movies.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movies;
