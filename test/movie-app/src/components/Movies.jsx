import React from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Pagignation from "./Pagination";

function Movies({
  watchList,
  handleAddToWatchList,
  handleRemoveFromWatchList,
}) {
  const [pageNo, setPage] = useState(1);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNo}`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDk1MzYxZTcyNjhlYThhODgyNGQ3NDNhNjkxNzdmYiIsInN1YiI6IjY1ZjAxNmJlNjZhN2MzMDE2MmRlM2UyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e8mN0TOatsLsl8exm3SZw-Xc4V1mBMOPbQjDlKzjl5k",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        setMovie(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [pageNo]);

  const handlePrev = () => {
    if (pageNo == 1) setPage(1);
    else setPage(pageNo - 1);
  };
  const handleNext = () => {
    setPage(pageNo + 1);
  };

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-round gap-8">
        {movie.map((movieobj) => {
          return (
            <MovieCard
              key={movieobj.original_title}
              movieObject={movieobj}
              poster_path={movieobj.poster_path}
              name={movieobj.original_title}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              watchList={watchList}
            />
          );
        })}
      </div>
      <Pagignation
        handlePrev={handlePrev}
        handleNext={handleNext}
        pageNo={pageNo}
      />
    </div>
  );
}

export default Movies;
