import { useState } from "react";
import "./App.css";
import MovieCard from "./component/MovieCard";
import movieListData from "./data/movieListData.json";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./component/MovieDetail";
import Layout from "./component/Layout";

function App() {
  const [movies] = useState(movieListData.results);
  console.log(movies);

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
