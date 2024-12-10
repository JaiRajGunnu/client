// src/components/StoryForm.js
import React, { useState } from 'react';
import axios from 'axios';
import StoryDisplay from './StoryDisplay'; // Import StoryDisplay component

function StoryForm() {
  const [genre, setGenre] = useState('');
  const [length, setLength] = useState('');
  const [mainCharacter, setMainCharacter] = useState('');
  const [setting, setSetting] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [story, setStory] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the data to be sent to the backend
    const storyDetails = { genre, length, mainCharacter, setting, ageGroup };

    try {
      const response = await axios.post('http://localhost:5000/api/generate-story', storyDetails);
      setStory(response.data.story); // Display the generated story
    } catch (error) {
      console.error('Error generating story:', error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">Create Your Story</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Genre Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="genre" className="text-lg text-gray-700 mb-2">Select Genre</label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Genre</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Adventure">Adventure</option>
            <option value="Mystery">Mystery</option>
          </select>
        </div>

        {/* Story Length */}
        <div className="flex flex-col">
          <label htmlFor="length" className="text-lg text-gray-700 mb-2">Length (in words)</label>
          <input
            id="length"
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="e.g., 1000"
            className="p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Main Character */}
        <div className="flex flex-col">
          <label htmlFor="mainCharacter" className="text-lg text-gray-700 mb-2">Main Character</label>
          <input
            id="mainCharacter"
            type="text"
            value={mainCharacter}
            onChange={(e) => setMainCharacter(e.target.value)}
            placeholder="e.g., John the Brave"
            className="p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Setting */}
        <div className="flex flex-col">
          <label htmlFor="setting" className="text-lg text-gray-700 mb-2">Setting</label>
          <input
            id="setting"
            type="text"
            value={setting}
            onChange={(e) => setSetting(e.target.value)}
            placeholder="e.g., enchanted forest"
            className="p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Age Group */}
        <div className="flex flex-col">
          <label htmlFor="ageGroup" className="text-lg text-gray-700 mb-2">Age Group</label>
          <input
            id="ageGroup"
            type="text"
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            placeholder="e.g., Children, Teens"
            className="p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Generate Story
        </button>
      </form>

      {/* Display the generated story */}
      {story && <StoryDisplay story={story} />}
    </div>
  );
}

export default StoryForm;
