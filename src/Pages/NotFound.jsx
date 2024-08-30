// src/components/NotFoundPage.js

import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../assets/404-animation.json"; // Ensure your Lottie file is placed correctly

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: 300, height: 300 }}
      />
      <h1 className="mt-8 text-2xl font-bold text-gray-800">Page Not Found</h1>
      <p className="mt-4 text-gray-600">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
