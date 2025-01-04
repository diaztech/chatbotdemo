const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');
const pluginRoutes = require('./routes/pluginRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const path = require('path');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/chats', chatRoutes);
app.use('/api/plugins', pluginRoutes);

// app.get('/', (req, res) => {
//     res.send('Welcome to the Chatbot Backend API!');
// });

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Route to serve the chatbot.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/chatbot.html'));
});

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
