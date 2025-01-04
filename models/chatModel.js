const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database path from .env
const dbPath = process.env.DB_PATH || path.resolve(__dirname, '../db/chat.db');
const db = new sqlite3.Database(dbPath);

const ChatModel = {
    // Initialize database schema
    init: () => {
        const createTableQuery = `
        CREATE TABLE IF NOT EXISTS chats (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sessionId TEXT NOT NULL,
            userMessage TEXT NOT NULL,
            botResponse TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )`;
        db.run(createTableQuery, (err) => {
            if (err) console.error("Error creating chats table:", err);
        });
    },

    // Save chat message
    createChat: (sessionId, userMessage, botResponse, callback) => {
        const query = `
        INSERT INTO chats (sessionId, userMessage, botResponse)
        VALUES (?, ?, ?)`;
        db.run(query, [sessionId, userMessage, botResponse], function (err) {
            callback(err, this.lastID);
        });
    },

    // Retrieve chat history by session ID
    getChatHistory: (sessionId, callback) => {
        const query = `
        SELECT * FROM chats WHERE sessionId = ? ORDER BY timestamp ASC`;
        db.all(query, [sessionId], (err, rows) => {
            callback(err, rows);
        });
    },

    // Delete old chats (optional)
    deleteChat: (sessionId, callback) => {
        const query = `DELETE FROM chats WHERE sessionId = ?`;
        db.run(query, [sessionId], (err) => {
            callback(err);
        });
    },
};

module.exports = ChatModel;
