import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  console.log(movies, "jam");
  return (
    <div className="pl-10 pt-5">
      <h1 className="text-3xl font-bold mb-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCards posterPath={movie?.poster_path} key={movie?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
