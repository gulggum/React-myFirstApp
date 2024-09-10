import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../components/Movies";
import styles from "../styles/Detail.module.css";
import { Link } from "react-router-dom";

function Detail() {
  const [detailLoading, setDetailLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getDetailMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetailLoading(false);
    setDetail(json.data.movie);
    console.log(json.data.movie);
  };

  useEffect(() => {
    getDetailMovie();
  }, []);
  return (
    <h1 key={Movies.id} className={styles.detail__container}>
      <h4 className={styles.home__btn}>
        <Link to="/">Home</Link>
      </h4>
      {detailLoading ? (
        "Loading...."
      ) : (
        <div className={styles.detailMovie__container}>
          <div>
            <img src={detail.large_cover_image} alt="img" />
          </div>
          <div className={styles.movie__right}>
            <h2>
              {detail.title}
              {` (${detail.year})`}
            </h2>
            <span>{detail.summary}</span>
            <span className={styles.raingRuntime}>
              ⭐ {detail.rating}ㆍ{detail.runtime}m
            </span>
            <ul>
              {detail.genres.map((g) => (
                <li className={styles.detail__genres} key={g}>{`# ${g}`}</li>
              ))}
            </ul>
            <span className={styles.movie__description}>
              {detail.description_intro}
            </span>
            <div className={styles.more__btn}>
              <Link to={detail.url}>more</Link>
            </div>
          </div>
        </div>
      )}
    </h1>
  );
}

export default Detail;
