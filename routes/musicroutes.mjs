// routes/musicRoutes.mjs
import express from "express";
import Music from "../model/Music.mjs";

const router = express.Router();

// Create Music Suggestion
router.post("/", async (req, res) => {
  try {
    // Declare a variable then perform action on the Music collection
    let newMusic = await Music.create(req.body);

    // Return the created music suggestion
    res.json(newMusic);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Read all Music Suggestions
router.get("/", async (req, res) => {
  try {
    let allMusicSuggestions = await Music.find({});

    res.json(allMusicSuggestions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Read a Music Suggestion by Emotion
router.get("/:emotion", async (req, res) => {
  try {
    const emotion = req.params.emotion.toLowerCase();
    let musicByEmotion = await Music.findOne({ emotion });

    if (!musicByEmotion) {
      return res.status(404).json({ msg: "Emotion not found" });
    }

    res.json(musicByEmotion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Update a Music Suggestion by Emotion
router.put("/:emotion", async (req, res) => {
  try {
    let updatedMusic = await Music.findOneAndUpdate(
      { emotion: req.params.emotion },
      req.body,
      { new: true }
    );

    if (!updatedMusic) {
      return res.status(404).json({ msg: "Emotion not found" });
    }

    res.json(updatedMusic);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Delete Music Suggestion by Emotion
router.delete("/:emotion", async (req, res) => {
  try {
    let deletedMusic = await Music.findOneAndDelete({
      emotion: req.params.emotion,
    });

    if (!deletedMusic) {
      return res.status(404).json({ msg: "Emotion not found" });
    }

    res.json({ msg: "Music suggestion deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
