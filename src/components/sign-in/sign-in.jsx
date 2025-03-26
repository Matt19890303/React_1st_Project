import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase';

export const SignIn = () => {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

    // Sign in with Google popup
    const logGoogleUser = async () => {
      // Sign in with Google popup
      const { user } = await signInWithGooglePopup();
      // Create user document from Firebase
      const userDocRef = await createUserDocumentFromAuth(user);
    };

  return (
    <section className="grid items-center h-screen p-8 text-center bg-gray-100">
      <div className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-2xl font-semibold text-gray-900">Sign In</h3>
        <p className="mb-6 text-gray-600">Enter your email and password to sign in</p>
        <form action="#" className="text-left">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={passwordShown ? "text" : "password"}
                placeholder="********"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 flex items-center text-gray-600 right-3 hover:text-gray-900"
              >
                {passwordShown ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <button className="w-full py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Sign In
          </button>
          <div className="mt-2 text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button className="flex items-center justify-center w-full gap-2 py-3 mt-4 border border-gray-300 rounded-lg hover:bg-gray-100" onClick={logGoogleUser}>
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="Google logo"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
            Not registered? <Link to="/register-form" className="font-medium text-blue-600 hover:underline">Create account</Link>
          </p>
        </form>
      </div>
    </section>
  );
};
