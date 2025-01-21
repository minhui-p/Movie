import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTMDBdata } from "../api/tmdbApi";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovieDetail = async () => {
      try {
        const data = await fetchTMDBdata(`movie/${id}?language=ko-US`); 
        setMovie(data); 
      } catch (error) {
        setError("영화 상세정보 로딩 중 에러가 발생했쇼!!!");
        console.error("영화 상세정보 로딩 실패!!!!!", error);
      }
    };
    loadMovieDetail();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>; 
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

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
