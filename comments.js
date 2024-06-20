// Create web server for comment
// Import module
const express = require('express');
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// Dummy data (for example purposes)
let comments = [
  { id: 1, text: 'First comment' },
  { id: 2, text: 'Second comment' }
];

// Route to get all comments
router.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to add a new comment
router.post('/comments', (req, res) => {
  const { text } = req.body;
  const newComment = { id: comments.length + 1, text };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Export the router
module.exports = router;
