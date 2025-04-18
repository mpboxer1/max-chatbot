const userInput = document.getElementById("userInput");
const messages = document.getElementById("messages");
const playButton = document.getElementById("playButton");
const themeSong = document.getElementById("themeSong");

let isFirstMessage = true;

// Play song on click
playButton.addEventListener("click", () => {
  themeSong.play();
  playButton.style.display = "none";
});

// Send message on Enter
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const input = userInput.value.trim();
    if (input) {
      addMessage("You", input);
      generateBotReply(input);
      userInput.value = "";
    }
  }
});

function addMessage(sender, text) {
  const message = document.createElement("div");
  message.innerHTML = `<strong>${sender}:</strong> ${text}`;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function generateBotReply(userText) {
  if (isFirstMessage) {
    addMessage("John Wick", "I am John Wick, Max’s assistant.");
    isFirstMessage = false;
  } else {
    const response = generateAIResponse(userText);
    addMessage("John Wick", response);
  }
}

function generateAIResponse(input) {
  // Very basic mock logic
  if (input.toLowerCase().includes("who are you")) {
    return "I am the Baba Yaga.";
  } else if (input.toLowerCase().includes("help")) {
    return "Tell me what you need. I don’t hesitate.";
  } else {
    return "Talk to the man... I am listening.";
  }
}
