const express = require("express");
const router = express.Router();

router.post("/generate-story", (req, res) => {
  const { genre, length, protagonist, theme, timePeriod } = req.body;

  // Enhanced story generation logic
  const story = `
    In a ${timePeriod} ${genre} world, a ${protagonist} embarked on an incredible journey.
    The theme of this story was ${theme}, and it unfolded in ${length} words of pure adventure.
    What twists and turns awaited? That’s for you to discover!
  `;

  res.json({ story });
});

module.exports = router;
