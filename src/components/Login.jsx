import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/ogw/AF2bZyig7AjMUXOWzpiPQlxr84UFurTQ5lYx3eF4tYhzA5k6xbI=s64-c-mo",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
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
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 flex flex-col w-3/12 p-6 rounded-lg"
      >
        <h1 className="text-white text-3xl font-bold mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 bg-gray-700 rounded-lg mb-4"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 bg-gray-700 rounded-lg mb-4"
        />

        <input
          ref={password}
          type="password"
          placeholder="Passward"
          className="p-3 bg-gray-700 rounded-lg mb-4"
        />
        <p className="text-red-500 font-bold mb-8">{errorMessage}</p>

        <button
          className="bg-red-500 px-5 py-3 text-white rounded-lg mb-8"
          onClick={handleButtonClick}
        >
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
