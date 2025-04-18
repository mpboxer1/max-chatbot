require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static(__dirname));

// Chat endpoint
app.post('/chat', (req, res) => {
  const responses = [
    "I'm John Wick, Max's assistant. How may I help?",
    "Message received. I'll inform Max.",
    "Max is currently unavailable. Try again later.",
    "Understood. Max will be notified.",
    "Affirmative. I've recorded your message."
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  res.json({ response });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`John Wick Assistant active on port ${PORT}`);
});
