require('dotenv').config();
const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const { initializeDatabase } = require('./config/database');

const PORT = process.env.PORT || 3000;

// Initialize Database
initializeDatabase();

// Create HTTP server and WebSocket server
const server = http.createServer(app);
const io = new Server(server);

// WebSocket logic
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('message', (msg) => {
    console.log('Message received:', msg);
    socket.broadcast.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Start Server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
