// import express from "express";
// import Question from "../models/Question.js";

// const router = express.Router();

// router.get("/random", async (req, res) => {
//   try {
//     const count = await Question.countDocuments();
//     const randomIndex = Math.floor(Math.random() * count);

//     const question = await Question.findOne().skip(randomIndex);

//     res.json(question);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch question" });
//   }
// });

// export default router;

import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

/**
 * GET random question by category + difficulty
 */
router.get("/practice", async (req, res) => {
  try {
    const { category, difficulty } = req.query;

    if (!category || !difficulty) {
      return res.status(400).json({ message: "Missing filters" });
    }

    const questions = await Question.find({
      category,
      difficulty
    });

    if (questions.length === 0) {
      return res.status(404).json({ message: "No questions found" });
    }

    // 🎯 RANDOM QUESTION
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    res.json(randomQuestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
