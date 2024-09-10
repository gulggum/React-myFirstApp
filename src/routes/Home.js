import { useState, useEffect } from "react";
import Movies from "../components/Movies";
import styles from "../styles/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=yea"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.home__title}>Movies</h1>
      {loading ? (
        <h1>
          <strong>"Loading...."</strong>
        </h1>
      ) : (
        <div className={styles.movie__container}>
          {movies.map((movie) => (
            <Movies
              key={movies.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              rating={movie.rating}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
