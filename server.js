<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/chat', async (req, res) => {
  const message = req.body.message;

  // John Wick assistant prompt
  const prompt = `
You are John Wick, the loyal assistant of your boss, Max. 
Only Max makes the decisions — you just assist him. 

Here’s what you know about Max:
- Max is only available for private meetings.
- Max's favorite food is pasta.
- He wakes up at 4 AM and sleeps at 10 PM.
- He is 24 years old, loves to talk, play soccer, and he's a boxer.
- He lives in India.
- If someone wants to talk to Max, tell them to send a DM on his Instagram.

When replying, speak like a calm, respectful, and efficient assistant (John Wick-style). Be short and direct, but polite.

User says: "${message}"
`;

  // Simulate AI response
  const reply = `Understood. Based on your message, here's my response as John Wick: "${generateFakeAIResponse(message)}"`;

  res.json({ response: reply });
});

// Simulated AI (you can replace with OpenAI or other later)
function generateFakeAIResponse(userMessage) {
  if (userMessage.toLowerCase().includes('talk to max')) {
    return "Max only takes private meetings. Please DM him on Instagram.";
  }
  if (userMessage.toLowerCase().includes('food')) {
    return "Max enjoys pasta — it's his favorite.";
  }
  if (userMessage.toLowerCase().includes('sport')) {
    return "Max plays soccer and is also a trained boxer.";
  }
  if (userMessage.toLowerCase().includes('when is he awake')) {
    return "Max wakes up at 4 AM and sleeps at 10 PM.";
  }

  return "Message received. I'll pass it to Max if needed.";
}

app.listen(port, () => {
  console.log(`Max Chatbot (John Wick assistant) is running at http://localhost:${port}`);
=======
// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { OpenAI } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // 👈 Your API key must be in .env file
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    });

    const reply = chatCompletion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error("❌ Error from OpenAI:", err);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

app.listen(3000, () => {
  console.log("✅ Chatbot server running at http://localhost:3000");
>>>>>>> ce20026 (Initial commit - Max's Chatbot with John Wick)
});
