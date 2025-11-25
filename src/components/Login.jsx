import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
          alt="background-image"
        />
      </div>
      <form
        action=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 flex flex-col w-3/12 p-6 rounded-lg"
      >
        <h1 className="text-white mb-8 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 mb-8 bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 mb-8 bg-gray-700 rounded-lg"
        />

        <input
          type="password"
          placeholder="Passward"
          className="p-3 mb-8 bg-gray-700 rounded-lg"
        />
        <button className="bg-red-500 px-5 py-3 text-white rounded-lg mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already Registed? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
