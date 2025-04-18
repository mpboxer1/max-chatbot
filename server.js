require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Max's information
const MAX = {
  name: "Max",
  phone: "+19898841911",
  instagram: process.env.MAX_INSTAGRAM || "max_private",
  status: "currently unavailable",
  profession: "professional boxer"
};

// Enhanced Response System
app.post('/chat', (req, res) => {
  const message = req.body.message.toLowerCase().trim();
  let response;

  // Greetings
  if (/^(hi|hello|hey)/i.test(message)) {
    response = `I'm John Wick, ${MAX.name}'s assistant. ${MAX.name} is ${MAX.status}. How can I help you?`;
  }
  // Contact Requests
  else if (/(contact|reach|talk|call|number|whatsapp|phone|dm|direct message|instagram)/i.test(message)) {
    response = `${MAX.name} prefers direct contact:\n\n📞 ${MAX.phone}\n📸 @${MAX.instagram}`;
  }
  // About Max
  else if (/(who is max|about max|your boss)/i.test(message)) {
    response = `${MAX.name} is a ${MAX.profession} and my employer. I handle his communications.`;
  }
  // Default Professional Response
  else {
    response = `${MAX.name} will be notified. For urgent matters:\n\n📞 ${MAX.phone}\n📸 @${MAX.instagram}`;
  }

  res.json({ 
    response,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`John Wick Assistant active on port ${PORT}`);
});
