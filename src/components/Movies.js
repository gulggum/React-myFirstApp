import propTypes from "prop-types";

function Movies({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="coverImg" />
      <h3>Title : {title}</h3>
      <p>Summary : {summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}> {g}</li>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
}

Movies.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.string.isRequired,
};

export default Movies;
