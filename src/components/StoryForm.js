import React, { useState } from 'react';
import axios from 'axios';

function StoryForm() {
  const [genre, setGenre] = useState('');
  const [length, setLength] = useState('');
  const [protagonist, setProtagonist] = useState('');
  const [theme, setTheme] = useState('');
  const [timePeriod, setTimePeriod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storyDetails = { genre, length, protagonist, theme, timePeriod };

    try {
      const response = await axios.post('http://localhost:5000/generate-story', storyDetails);
      console.log(response.data); // Display the response
    } catch (error) {
      console.error('Error generating story:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2 text-gray-700 font-semibold">Genre:</label>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select Genre</option>
          <option value="Adventure">Adventure</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Romance">Romance</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 text-gray-700 font-semibold">Protagonist Role:</label>
        <select
          value={protagonist}
          onChange={(e) => setProtagonist(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select Protagonist</option>
          <option value="Hero">Hero</option>
          <option value="Villain">Villain</option>
          <option value="Adventurer">Adventurer</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 text-gray-700 font-semibold">Theme:</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select Theme</option>
          <option value="Mystery">Mystery</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 text-gray-700 font-semibold">Time Period:</label>
        <select
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select Time Period</option>
          <option value="Medieval">Medieval</option>
          <option value="Modern">Modern</option>
          <option value="Futuristic">Futuristic</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 text-gray-700 font-semibold">Story Length:</label>
        <input
          type="text"
          placeholder="Enter story length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Generate Story
      </button>
    </form>
  );
}

export default StoryForm;
