// src/pages/HomePage.js

import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [message, setMessage] = useState("");

  // Fetch data from the backend when the component loads
  useEffect(() => {
    fetch("http://localhost:5000/api/hello") // Make sure the backend API URL is correct
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => setMessage(data.message)) // Set the message in state
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div>
      <h1>Welcome to AI Story Generator</h1>
      <p>{message}</p> {/* Display the message from the backend */}
    </div>
  );
};

export default HomePage;
