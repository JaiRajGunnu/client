const express = require('express');
const router = express.Router();

// Mock story generation logic (you can replace this with AI integration later)
router.post('/generate-story', (req, res) => {
  const { genre, length } = req.body;
  const story = `Once upon a time, in a ${genre} world, a hero set out on an epic adventure. The story was ${length} words long.`;
  res.json({ story });
});

module.exports = router;
