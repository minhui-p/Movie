import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./component/MovieCard";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./component/MovieDetail";
import Layout from "./component/Layout";
import { fetchTMDBdata } from "./api/tmdbApi";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchTMDBdata("movie/popular?language=ko-US&page=1");
        const filteredMovies = data.results.filter((movie) => !movie.adults);

        setMovies(filteredMovies);
      } catch (error) {
        setError(error.message);
        console.error("영화 데이터 불러오기 실패...", error);
      }
    };
    loadMovies();
  }, []);
  if (error) {
    return <div className="p-5">Error: {error}</div>;
  }

  return (
    <div className="p-5">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div className="flex justify-center">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {movies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      posterPath={movie.poster_path}
                      voteAverage={movie.vote_average}
                    />
                  ))}
                </div>
              </div>
            }
          />
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
