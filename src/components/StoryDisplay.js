// client/src/components/StoryDisplay.js
import React from "react";

function StoryDisplay({ story }) {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Your Generated Story</h2>
      <p className="text-lg text-gray-800 whitespace-pre-line">{story}</p>
    </div>
  );
}

export default StoryDisplay;
