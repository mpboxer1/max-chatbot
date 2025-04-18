document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
document.getElementById("voice-btn").addEventListener("click", startVoiceRecognition);

let theme = 'light';

function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() !== '') {
    displayMessage(userInput, 'user');
    getChatbotResponse(userInput);
  }
  document.getElementById('user-input').value = '';
}

function displayMessage(message, sender) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(sender);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getChatbotResponse(message) {
  fetch('/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  })
    .then(response => response.json())
    .then(data => {
      displayMessage(data.response, 'bot');
      if (data.response.startsWith('http')) {
        const image = document.createElement('img');
        image.src = data.response;
        document.getElementById('chat-box').appendChild(image);
      }
    });
}

function toggleTheme() {
  theme = theme === 'light' ? 'dark' : 'light';
  document.body.classList.toggle('dark-theme', theme === 'dark');
}

function startVoiceRecognition() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.start();

  recognition.onresult = function (event) {
    const voiceInput = event.results[0][0].transcript;
    displayMessage(voiceInput, 'user');
    getChatbotResponse(voiceInput);
  };
}
