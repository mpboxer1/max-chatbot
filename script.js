const chatBox = document.getElementById('chatBox');
const input = document.getElementById('userInput');
const playBtn = document.getElementById('playBtn');
const themeSong = document.getElementById('themeSong');

let firstMessage = true;

function sendMessage() {
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage(userMessage, 'user');
  input.value = '';

  setTimeout(() => {
    if (firstMessage) {
      appendMessage("I am John Wick, Max’s assistant.", 'bot');
      firstMessage = false;
    } else {
      const reply = generateBotReply(userMessage);
      appendMessage(reply, 'bot');
    }
  }, 500);
}

function appendMessage(message, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = message;
  msgDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotReply(input) {
  const replies = [
    "Talk to the man.",
    "Do you really want to mess with me?",
    "I don’t think that’s a wise question.",
    "He’s busy. I’ll give you his private number: +19898841911.",
    "I have access to internet, I never get boring.",
    "You better be serious, I’m not a joke."
  ];

  return replies[Math.floor(Math.random() * replies.length)];
}

// Play theme on button click
playBtn.addEventListener('click', () => {
  themeSong.play();
});
