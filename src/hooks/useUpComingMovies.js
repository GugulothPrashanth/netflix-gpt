import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../../redux/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );

      const json = await data.json();
      console.log(json.results);
      dispatch(addUpComingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUpComingMovies();
  }, [dispatch]);
};

export default useUpComingMovies;
