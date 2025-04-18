const responses = {
  "hello": "Hello! How can I assist you today?",
  "how are you": "I'm just a chatbot, but I'm doing great! How about you?",
  "who are you": "I'm John Wick, the assistant of Max. Ask me anything!",
  "favorite food": "Max loves pasta. That's his favorite food!",
  "schedule": "Max wakes up at 4 AM and sleeps at 10 PM. He’s available for private meetings.",
  "hobbies": "Max enjoys talking, playing soccer, and boxing.",
  "age": "Max is 24 years old.",
  "home": "Max's home is in India.",
  "social": "If you want to talk to Max, send him a message on Instagram DM!"
};

let userInput = document.getElementById("user-input");
let messagesContainer = document.getElementById("messages");

function sendMessage() {
  let userMessage = userInput.value.trim().toLowerCase();

  if (userMessage) {
      // Display user message
      messagesContainer.innerHTML += `<div class="user-message">You: ${userMessage}</div>`;

      // Get response from chatbot
      let botResponse = responses[userMessage] || "Sorry, I don't understand that. Try asking something else.";

      // Display chatbot response
      setTimeout(() => {
          messagesContainer.innerHTML += `<div class="bot-message">John Wick: ${botResponse}</div>`;
          messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
      }, 500);

      // Clear input field
      userInput.value = "";
  }
}

// Listen for Enter key press
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
      sendMessage();
  }
});
