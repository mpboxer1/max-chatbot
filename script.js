// Messages array for chatbot response
const messages = [
    { user: 'Hey John Wick!', bot: 'Hello! I am John Wick, Max’s assistant. How can I help you today?' },
    { user: 'Where is your boss?', bot: 'Sorry, I am always busy. But you can reach my boss at +19898841911 for anything!' },
    { user: 'Tell me about John Wick', bot: 'John Wick is a former hitman seeking vengeance for his dog.' }
];

// Function to display chat messages
function displayMessages() {
    const messageContainer = document.getElementById('messages');
    messageContainer.innerHTML = '';

    messages.forEach(message => {
        const userMessage = document.createElement('p');
        userMessage.textContent = `You: ${message.user}`;
        messageContainer.appendChild(userMessage);

        const botMessage = document.createElement('p');
        botMessage.textContent = `Bot: ${message.bot}`;
        messageContainer.appendChild(botMessage);
    });
}

// Function to send and display new message
function sendMessage() {
    const userInput = document.getElementById('user-input').value;

    if (userInput) {
        messages.push({ user: userInput, bot: "Sorry, I didn't quite catch that. Please ask something else!" });
        displayMessages();
        document.getElementById('user-input').value = '';
    }
}

// Initial message display
displayMessages();
