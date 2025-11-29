import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[200px] pl-[115px] absolute text-white bg-linear-to-r from-black w-screen aspect-video">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl text-gray-500 w-1/3 mt-2">{overview}</p>
      <div className="mt-8 mb-5 flex gap-3">
        <button className="border px-10 py-2 rounded-md text-[16px] text-black bg-white h-10 flex justify-center items-center hover:bg-gray-200 cursor-pointer">
          ▶️ Play
        </button>
        <button className="px-10 py-2 rounded-md text-[16px] text-white bg-gray-500/40 h-10  flex justify-center items-center cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
