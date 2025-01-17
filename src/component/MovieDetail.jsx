import { useState } from "react";
import MovieDetailData from "../data/movieDetailData.json";

function MovieDetail() {
  const [movie] = useState(MovieDetailData);

  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-gray-100 p-10">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-[300px]"
      />
      <div className="flex flex-col items-start md:items-start space-y-4 p-3">
        <div className="flex flex-row">
          <div>{movie.title}</div>
          <div className="pl-2">평점 : {movie.vote_average}</div>
        </div>
        <div>장르: {movie.genres.map((genre) => genre.name).join(", ")}</div>
        <div>줄거리:{movie.overview}</div>
      </div>
    </div>
  );
}

export default MovieDetail;
