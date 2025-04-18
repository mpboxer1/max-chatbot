const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  const reply = generateReply(userMessage);
  res.json({ reply });
});

function generateReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('hello')) return "Hey! Max here 👋";
  if (msg.includes('how are you')) return "I'm Max. Always ready to chat!";
  if (msg.includes('who are you')) return "I'm Max – your personal chatbot buddy 😎";
  return "That’s cool! Want to tell me more?";
}

app.listen(PORT, () => {
  console.log(`Max is running at http://localhost:${PORT}`);
});
