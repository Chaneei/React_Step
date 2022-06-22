import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(true);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <h1>{movieDetail.title}</h1>
          <img src={movieDetail.medium_cover_image} />
          <p>{movieDetail.genres}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Detail;
