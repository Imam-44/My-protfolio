import React from "react";
import { useNavigate } from "react-router-dom";

const ResumePlaceholder = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 via-indigo-800 to-pink-700 text-white px-4">
      <h1 className="text-4xl font-bold mb-6 font-signature">
        Resume is under construction
      </h1>
      <p className="mb-8 text-lg max-w-md text-center">
        Sorry, my resume page is not ready yet. Please check back soon!
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition cursor-pointer"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ResumePlaceholder;
