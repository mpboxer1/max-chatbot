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
});
