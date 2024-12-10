// server/routes/storyRoutes.js
const express = require('express');
const router = express.Router();

// Mock story generation logic (you can replace this with AI integration later)
router.post('/generate-story', (req, res) => {
  const { genre, length, mainCharacter, setting, ageGroup } = req.body;

  // Generate the story based on the data received
  const story = `Once upon a time, in a ${genre} world, a hero named ${mainCharacter} set out on an epic adventure in a ${setting}. The story was ${length} words long. It was meant for ${ageGroup}.`;

  // Send the generated story as a response
  res.json({ story });
});

module.exports = router;
