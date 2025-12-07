import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );

      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
