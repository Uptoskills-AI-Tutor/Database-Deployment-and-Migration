const express = require("express");
const router = express.Router();

// Sample in memory DB 
const forumQuestions = [];

// POST /forum/question
router.post("/question", (req, res) => {
  const { userId, question, courseId } = req.body;

  if (!userId || !question || !courseId) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  // Store question (mock)
  const newQuestion = {
    id: forumQuestions.length + 1,
    userId,
    question,
    courseId,
    date: new Date()
  };

  forumQuestions.push(newQuestion);

  res.json({ success: true, message: "Question submitted", data: newQuestion });
});

module.exports = router;
