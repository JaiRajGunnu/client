import React, { useState } from 'react';
import axios from 'axios';

function StoryForm() {
  const [genre, setGenre] = useState('');
  const [length, setLength] = useState('');

  const genres = [
    'Adventure',
    'Romance',
    'Science Fiction',
    'Fantasy',
    'Mystery',
    'Thriller',
    'Historical',
    'Horror',
    'Comedy',
    'Drama'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storyDetails = { genre, length };

    try {
      const response = await axios.post('http://localhost:5000/api/generate-story', storyDetails);
      // Use the response to display the story in StoryDisplay component
      console.log(response.data);
    } catch (error) {
      console.error("Error generating story:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="genre" className="block text-gray-700 font-medium mb-2">
          Select Genre:
        </label>
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="" disabled>
            Choose a genre
          </option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="length" className="block text-gray-700 font-medium mb-2">
          Enter Story Length (words):
        </label>
        <input
          type="text"
          id="length"
          placeholder="Story length (e.g., 500)"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Generate Story
      </button>
    </form>
  );
}

export default StoryForm;
