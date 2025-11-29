import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="w-56">
      <img src={IMG_CDN_URL + posterPath} alt="Poster" />
    </div>
  );
};

export default MovieCards;
