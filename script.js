document.getElementById('send-btn').addEventListener('click', function() {
  let userInput = document.getElementById('user-input').value.trim();
  if (userInput !== "") {
      // Display user message
      let userMessage = document.createElement('div');
      userMessage.classList.add('user-message');
      userMessage.innerText = userInput;
      document.getElementById('chat-messages').appendChild(userMessage);

      // Clear input field
      document.getElementById('user-input').value = "";

      // Generate bot's response after a delay
      setTimeout(function() {
          let botMessage = document.createElement('div');
          botMessage.classList.add('bot-message');
          botMessage.innerText = getBotResponse(userInput);
          document.getElementById('chat-messages').appendChild(botMessage);

          // Scroll to bottom
          document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
      }, 1000);
  }
});

// Simple bot response logic
function getBotResponse(userInput) {
  let response = "Sorry, I didn't quite catch that. Please ask something else!";
  if (userInput.toLowerCase().includes("where is your boss")) {
      response = "I will give you a private number of my boss: +19898841911. He is always busy!";
  }
  return response;
}
