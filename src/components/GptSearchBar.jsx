import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../../redux/gptSlice";
import { API_OPTIONS } from "../utils/constants";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config?.lang);
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,

      API_OPTIONS
    );

    const json = await response.json();
    console.log(json.results);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = `
      Act as a movie recommendation engine.
      User query: "${searchText.current.value}".
      Return ONLY the names of EXACTLY 5 movies.
      Format: movie1, movie2, movie3, movie4, movie5
      No extra text. No descriptions. No sentences. No new lines.`;
    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: query,
    });

    const gptMovies = response.output_text.split(",");
    console.log(gptMovies, "movie names");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults, "movie suggestion");

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  const { movieNames, movieResults } = useSelector((state) => state?.gpt);
  console.log(movieResults, movieNames, "hey");

  return (
    <div className="pt-[10%]">
      <form
        action=""
        className="bg-black p-4 w-[400px] mx-auto flex justify-between gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="w-[80%] outline-none bg-white py-1 px-2"
        />
        <button className="bg-red-500 px-4 py-2" onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
