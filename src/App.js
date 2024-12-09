import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import StoryForm from './components/StoryForm';
import StoryDisplay from './components/StoryDisplay';



function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <header className="text-center p-6">
        <h1 className="text-4xl font-bold mb-2">AI Story Generator</h1>
        <p className="text-lg">Create your own stories with a touch of AI magic!</p>
      </header>
      <main className="bg-white text-gray-800 rounded-lg p-6 shadow-lg max-w-md w-full">
        <StoryForm />
      </main>
    </div>
  );
}


export default App;

