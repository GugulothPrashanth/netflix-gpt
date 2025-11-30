import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  return (
    <div className="pt-[10%]">
      <form
        action=""
        className="bg-black p-4 w-[400px] mx-auto flex justify-between gap-2"
      >
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="w-[80%] outline-none bg-white py-1 px-2"
        />
        <button className="bg-red-500 px-4 py-2">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
