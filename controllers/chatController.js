const chatModel = require('../models/chatModel')
const { db } = require('../config/database');

const getMessages = async (req, res, next) => {
  try {
    const { sessionId } = req.params;
    const messages = await db('messages').where({ session_id: sessionId });
    res.json(messages);
  } catch (err) {
    next(err);
  }
};

const postMessage = async (req, res, next) => {
  try {
    const { sessionId } = req.params;
    const { content } = req.body;

    const [id] = await db('messages').insert({ session_id: sessionId, content });
    res.status(201).json({ id, sessionId, content });
  } catch (err) {
    next(err);
  }
};

const handleChat = async (req, res) => {
  try {
      const { message } = req.body; // User's message from the frontend

      if (!message) {
          return res.status(400).json({ error: "Message is required" });
      }

      // TODO: Replace this with actual bot logic (e.g., OpenAI plugin)
      const botResponse = `You said: "${message}"`;

      // Optional: Save to database
      // await chatModel.createChat(sessionId, message, botResponse);

      res.status(200).json({ response: botResponse });
  } catch (error) {
      console.error('Error in handleChat:', error);
      res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getMessages, postMessage, handleChat };
