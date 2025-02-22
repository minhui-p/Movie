import { Link } from "react-router-dom";

const MovieCard = ({ id, title, posterPath, voteAverage }) => {
  return (
    <Link to={`/details/${id}`}>
      <div>
        <img
          //JSON 데이터에서 poster_path는 상대 경로이므로 TMDB 이미지 서버 URL과 결합
          src={`https://image.tmdb.org/t/p/w200${posterPath}`}
          alt={`${title} Poster`}
        />
        <div>{title}</div>
        <div>평점: {voteAverage}</div>
      </div>
    </Link>
  );
};

export default MovieCard;
