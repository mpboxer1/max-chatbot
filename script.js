// script.js

function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (message === "") return;
  
    appendMessage("You", message);
    input.value = "";
  
    setTimeout(() => {
      appendMessage("John Wick", getResponse(message));
    }, 600);
  }
  
  function appendMessage(sender, text) {
    const messages = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = `<strong style="color:#00ffff">${sender}:</strong> <span style="color:#eee">${text}</span>`;
    messageDiv.style.marginBottom = "12px";
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
  }
  
  function getResponse(msg) {
    msg = msg.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hello. John Wick here, Max's assistant. How can I help?";
    }
    if (msg.includes("max")) {
      return "Max is a 24-year-old boxer from India. He loves pasta, plays soccer, and wakes up at 4 AM.";
    }
    if (msg.includes("meeting")) {
      return "Max is available for private meetings only. Please DM him on Instagram.";
    }
    return "I'm John Wick. Let me know how I can assist on Max's behalf.";
  }
  