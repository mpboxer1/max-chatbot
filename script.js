// Play the theme song when the page is loaded
document.getElementById('themeSong').play();

// Store references to the input, chat area, and send button
const userInput = document.getElementById('user-input');
const chatArea = document.getElementById('chat-area');
const sendBtn = document.getElementById('send-btn');

// Send initial message when the page is loaded
window.onload = () => {
    addChatMessage("I am John Wick, Max's assistant.");
};

// Function to add a chat message
function addChatMessage(message, isUser = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    if (isUser) {
        messageElement.classList.add('user-message');
    }
    messageElement.textContent = message;
    chatArea.appendChild(messageElement);
    chatArea.scrollTop = chatArea.scrollHeight; // Scroll to the bottom
}

// Handle the sending of the message
sendBtn.addEventListener('click', () => {
    if (userInput.value.trim()) {
        const userMessage = userInput.value.trim();
        addChatMessage(userMessage, true);
        userInput.value = '';

        // Simulate a reply (you can add your custom AI logic here)
        setTimeout(() => {
            addChatMessage("I am processing your request... Please wait.", false);
        }, 1000);
    }
});

// Handle Enter key to send message
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && userInput.value.trim()) {
        sendBtn.click();
    }
});
