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

// Max's comprehensive information
const MAX = {
  name: "Max",
  age: 25,
  status: "single",
  profession: "professional boxer",
  hobbies: ["soccer", "boxing"],
  schedule: "busy with training sessions",
  location: "USA",
  hometown: "India",
  contact: {
    phone: "+19898841911",
    instagram: process.env.MAX_INSTAGRAM || "max_private"
  },
  personality: [
    "focused",
    "disciplined",
    "private about personal life",
    "passionate about sports"
  ]
};

// Enhanced AI Response Algorithm
function generateResponse(message) {
  // Clean and prepare the message
  const cleanMsg = message.toLowerCase().trim();
  
  // Initial greeting response
  if (/^(hi|hello|hey|greetings|sup|yo)/i.test(cleanMsg)) {
    return `I'm John Wick, ${MAX.name}'s personal assistant. ${MAX.name} is currently ${MAX.schedule}. How may I help you?`;
  }

  // Contact requests
  if (/(contact|reach|talk|speak|meet|call|connect|number|phone|dm|instagram|direct message)/i.test(cleanMsg)) {
    return `For direct contact with ${MAX.name}:\n\n` +
           `📞 Call: ${MAX.contact.phone}\n` +
           `📩 Instagram DM: @${MAX.contact.instagram}\n\n` +
           `${MAX.name} prefers these contact methods for privacy reasons.`;
  }

  // Professional inquiries
  if (/(box|fight|match|profession|career|work|job|train)/i.test(cleanMsg)) {
    return `${MAX.name} is a ${MAX.profession}. He takes his training very seriously ` +
           `and is currently preparing for upcoming matches.`;
  }

  // Soccer inquiries
  if (/(soccer|football|play|game|match|team)/i.test(cleanMsg)) {
    return `When not boxing, ${MAX.name} plays soccer professionally. ` +
           `It's his way to stay agile and maintain cardio fitness.`;
  }

  // Personal info
  if (/(who is max|about max|tell me about max)/i.test(cleanMsg)) {
    return `${MAX.name} is a ${MAX.age}-year-old ${MAX.profession} originally from ${MAX.hometown}, ` +
           `now based in ${MAX.location}. He's ${MAX.status} and completely focused on his career right now.`;
  }

  // Location based
  if (/(where|location|live|from|hometown)/i.test(cleanMsg)) {
    if (/(live|location|based|reside)/i.test(cleanMsg)) {
      return `${MAX.name} currently lives in ${MAX.location}.`;
    }
    if (/(from|hometown|origin)/i.test(cleanMsg)) {
      return `${MAX.name} is originally from ${MAX.hometown}, India.`;
    }
    return `${MAX.name} splits time between ${MAX.location} and ${MAX.hometown}.`;
  }

  // Schedule/availability
  if (/(available|free|time|schedule|meet|when)/i.test(cleanMsg)) {
    return `${MAX.name}'s schedule is extremely tight with training sessions. ` +
           `For urgent matters, please use the contact methods I provided earlier.`;
  }

  // Default intelligent response
  const defaultResponses = [
    `I've noted your message for ${MAX.name}. He'll respond when available.`,
    `Understood. ${MAX.name} will get back to you.`,
    `Message received. ${MAX.name} is currently ${MAX.schedule}.`,
    `Noted. For faster response, consider contacting ${MAX.name} directly.`,
    `${MAX.name} appreciates your message. He'll respond as soon as possible.`
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Chat endpoint
app.post('/chat', (req, res) => {
  const message = req.body.message;
  const response = generateResponse(message);
  
  res.json({ 
    response,
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`John Wick (${MAX.name}'s Assistant) active on port ${PORT}`);
});
