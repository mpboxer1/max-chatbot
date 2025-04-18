const themeSong = document.getElementById("themeSong");
document.getElementById("playButton").addEventListener("click", () => {
  themeSong.play();
});

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

let greeted = false;

function sendMessage() {
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  displayMessage(userMessage, 'user');

  setTimeout(() => {
    let botResponse;
    if (!greeted) {
      botResponse = "I am John Wick, Max’s assistant.";
      greeted = true;
    } else {
      botResponse = generateAIResponse(userMessage);
    }
    displayMessage(botResponse, 'bot');
  }, 500);

  userInput.value = "";
}

function displayMessage(message, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.textContent = message;
  msgDiv.className = sender;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(message) {
  const responses = [
    "You’ll have to talk to the man.",
    "Let me get back to you on that.",
    "This requires some special attention.",
    "Consider it done.",
    "That's something only Max can answer."
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
