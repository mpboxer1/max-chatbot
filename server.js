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
const maxInfo = {
  name: "Max",
  age: 25,
  status: "single",
  profession: "Professional Boxer",
  hobby: "Soccer",
  location: "USA",
  hometown: "India",
  contact: {
    phone: "+19898841911",
    instagram: process.env.MAX_INSTAGRAM || "max_private"
  }
};

// Enhanced AI responses
app.post('/chat', (req, res) => {
  const message = req.body.message.toLowerCase();
  let response;

  // Greetings
  if (/hi|hello|hey|greetings/i.test(message)) {
    response = `I'm John Wick, ${maxInfo.name}'s assistant. How may I help you?`;
  }
  // Contact Max
  else if (/contact|reach|talk|speak|meet|call/i.test(message)) {
    response = `${maxInfo.name} is currently busy with training. For private matters, you can:\n\n` +
               `• Call: ${maxInfo.contact.phone}\n` +
               `• DM on Instagram: @${maxInfo.contact.instagram}`;
  }
  // About Max's profession
  else if (/box|fight|profession|work|job/i.test(message)) {
    response = `${maxInfo.name} is a ${maxInfo.profession.toLowerCase()}.`;
  }
  // About soccer
  else if (/soccer|football|play|game/i.test(message)) {
    response = `${maxInfo.name} plays ${maxInfo.hobby.toLowerCase()} professionally when not boxing.`;
  }
  // Personal info
  else if (/age|old|single|status|where|live|from/i.test(message)) {
    if (/age|old/i.test(message)) {
      response = `${maxInfo.name} is ${maxInfo.age} years old.`;
    } 
    else if (/single|status/i.test(message)) {
      response = `${maxInfo.name} is ${maxInfo.status}.`;
    }
    else if (/where|live|location/i.test(message)) {
      response = `${maxInfo.name} lives in ${maxInfo.location} but is originally from ${maxInfo.hometown}.`;
    }
  }
  // Default response
  else {
    const defaultResponses = [
      "I'll make sure Max gets your message.",
      "Noted. Max will respond when available.",
      "Message received.",
      "Understood."
    ];
    response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }

  res.json({ 
    response,
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`John Wick (${maxInfo.name}'s Assistant) active on port ${PORT}`);
});
