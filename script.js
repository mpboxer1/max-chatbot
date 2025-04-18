// Function to send message and handle responses
function sendMessage() {
  var userInput = document.getElementById('user-input').value;
  if (userInput.trim() === "") return; // Prevent sending empty messages

  // Add user's message to the chat
  var messageContainer = document.getElementById('messages');
  var userMessageDiv = document.createElement('div');
  userMessageDiv.classList.add('user-message');
  userMessageDiv.innerText = userInput;
  messageContainer.appendChild(userMessageDiv);

  // Clear the input field
  document.getElementById('user-input').value = "";

  // Generate bot's response based on user input
  var botResponse = getBotResponse(userInput);

  // Add bot's response to the chat
  var botMessageDiv = document.createElement('div');
  botMessageDiv.classList.add('bot-message');
  botMessageDiv.innerText = botResponse;
  messageContainer.appendChild(botMessageDiv);

  // Scroll to the bottom of the chat
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Function to generate responses
function getBotResponse(userInput) {
  userInput = userInput.toLowerCase().trim();

  if (userInput.includes("hello") || userInput.includes("hi")) {
      return "Hello! How can I assist you today?";
  } else if (userInput.includes("how are you")) {
      return "I'm doing great, thank you for asking!";
  } else if (userInput.includes("what's your name")) {
      return "I'm John Wick, Max's assistant. How can I help you?";
  } else if (userInput.includes("where is max")) || userInput.includes("talk to max")) {
      return "Max is currently busy with private meetings. If you wish to contact him, you can reach out at +19898841911.";
  } else if (userInput.includes("soccer")) {
      return "Max loves playing soccer. He's very passionate about it!";
  } else if (userInput.includes("boxing")) {
      return "Max is also a skilled boxer!";
  } else if (userInput.includes("private number")) {
      return "I'm afraid Max is always busy. However, you can reach him at his private number: +19898841911.";
  } else {
      return "I'm sorry, I couldn't understand that. Could you please rephrase?";
  }
}
