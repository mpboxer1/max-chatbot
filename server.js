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
});
