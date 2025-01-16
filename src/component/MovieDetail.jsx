import { useState } from "react";
import MovieDetailData from "../data/movieDetailData.json";

function MovieDetail() {
  const [movie] = useState(MovieDetailData);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div>{movie.title}</div>
      <div>평점 : {movie.vote_average}</div>
      <div>장르: {movie.genres.map((genre) => genre.name).join(", ")}</div>
      <div>줄거리:{movie.overview}</div>
    </div>
  );
}

export default MovieDetail;
