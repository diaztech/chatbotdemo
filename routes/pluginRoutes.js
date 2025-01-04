const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.json({ message: 'Plugin route is working!' });
});

module.exports = router; // Ensure the router is exported correctly
