const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like CSS, JS, etc.

function greetUser() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good morning!";
  } else if (hour < 18) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
}

function tellJoke() {
  return "Why don't skeletons fight each other? They don't have the guts!";
}

function getRandomImage() {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];
  return images[Math.floor(Math.random() * images.length)];
}

app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  let response = '';

  // Personalized greetings
  if (userMessage.includes('hello') || userMessage.includes('hi')) {
    response = greetUser();
  }
  
  // Tell a joke
  else if (userMessage.includes('joke')) {
    response = tellJoke();
  }

  // Random Image
  else if (userMessage.includes('image')) {
    response = getRandomImage();
  } else {
    response = "I'm here to chat! How can I help you today?";
  }

  res.send({ response });
});

app.listen(port, () => {
  console.log(`Max Chatbot is running at http://localhost:${port}`);
});
