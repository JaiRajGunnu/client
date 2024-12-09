// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example API Route
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello from the server!" });
});

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the AI Story Generator backend!");
  });
  

// Serve the frontend (if it's built for production)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
