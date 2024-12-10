// src/components/HomePage.js
import React from "react";
import StoryForm from "./StoryForm";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-extrabold text-center text-white mb-6">
        Welcome to AI Story Generator
      </h1>
      <p className="text-lg text-center text-white mb-12 max-w-md mx-auto">
        Generate creative stories with ease! Just fill in the details below and
        watch your story come to life.
      </p>

      <StoryForm />
    </div>
  );
};

export default HomePage;
