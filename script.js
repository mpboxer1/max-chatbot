document.addEventListener('DOMContentLoaded', () => {
  const chatArea = document.getElementById('chat-area');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  const musicControl = document.getElementById('music-control');
  const themeSong = document.getElementById('theme-song');

  // Auto-resize textarea
  userInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

  // Music control
  musicControl.addEventListener('click', () => {
    if (themeSong.paused) {
      themeSong.play();
      musicControl.textContent = 'Pause Theme';
    } else {
      themeSong.pause();
      musicControl.textContent = 'Play Theme';
    }
  });

  // Send message function
  async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage('user', message);
    userInput.value = '';
    
    // Show typing indicator
    const typing = addTypingIndicator();
    
    try {
      const response = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      const data = await response.json();
      
      // Remove typing and add response
      chatArea.removeChild(typing);
      addMessage('bot', data.response);
      
    } catch (error) {
      chatArea.removeChild(typing);
      addMessage('bot', "Connection error. Try again.");
      console.error('Error:', error);
    }
  }

  // Helper functions
  function addMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `${sender}-msg`;
    msgDiv.textContent = `${sender === 'user' ? 'You' : 'John Wick'}: ${text}`;
    chatArea.appendChild(msgDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
  }

  function addTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-msg';
    typingDiv.textContent = 'John Wick is typing...';
    chatArea.appendChild(typingDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
    return typingDiv;
  }

  // Event listeners
  sendButton.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
});
