const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');
const chatContent = document.getElementById('chat-content');

sendButton.addEventListener('click', function () {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    // Display user message
    const userMessageElement = document.createElement('div');
    userMessageElement.textContent = `You: ${userMessage}`;
    chatContent.appendChild(userMessageElement);
    userInput.value = '';

    // Display bot's response
    const botMessageElement = document.createElement('div');
    botMessageElement.textContent = `Bot: I am John Wick, Max’s assistant.`;
    chatContent.appendChild(botMessageElement);

    // Scroll to the bottom
    chatContent.scrollTop = chatContent.scrollHeight;
  }
});

function playThemeSong() {
  const themeSong = document.getElementById('themeSong');
  themeSong.play();
}
