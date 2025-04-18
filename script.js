function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    const messagesDiv = document.getElementById('messages');
  
    if (message !== '') {
      appendMessage('You', message);
  
      setTimeout(() => {
        const reply = generateBotReply(message);
        appendMessage('John Wick', reply);
      }, 800);
  
      input.value = '';
    }
  }
  
  function appendMessage(sender, text) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
  
  function generateBotReply(message) {
    const lower = message.toLowerCase();
  
    if (lower.includes('your boss')) {
      return "I’ll give you my boss Max’s private number: +19898841911. But he's usually busy.";
    } else if (lower.includes('hello') || lower.includes('hi')) {
      return "Hello! I’m John Wick, Max’s assistant. How can I help you today?";
    } else if (lower.includes('who are you')) {
      return "I’m John Wick. Assistant to Max. Professional. Precise. Powerful.";
    } else {
      return "Sorry, I didn’t quite catch that. Ask me something else!";
    }
  }
  