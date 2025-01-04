const express = require('express');
const router = express.Router();

// Define a sample route
router.get('/', (req, res) => {
  res.json({ message: 'Chat route is working!' });
});

// POST route to handle chat
// router.post('/chat', chatController.handleChat);

module.exports = router;
