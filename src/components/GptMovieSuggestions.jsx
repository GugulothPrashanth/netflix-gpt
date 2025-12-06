import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((state) => state?.gpt);

  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black/55 text-white">
      <div>
        {movieResults.map((movie, index) => (
          <MovieList
            title={movieNames[index]}
            movies={movie}
            key={movieNames[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
