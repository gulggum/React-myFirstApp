// import Button from "./Button";
// import styles from "./App.module.css";

// import { json, response } from "express";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=yea"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>
          <strong>"Loading...."</strong>
        </h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h3>Title : {movie.title}</h3>
              <p>Summary : {movie.summary}</p>
              <ul>
                {movie.genres.map((genres) => (
                  <li key={genres}> {genres}</li>
                ))}
              </ul>
              <hr></hr>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
