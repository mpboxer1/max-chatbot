// Initialize the messages array
let messages = [
    { role: 'bot', content: 'Hello! I am John Wick, Max’s assistant. How can I help you today?' },
];

// Function to send a message from the user
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;

    // Display user message
    messages.push({ role: 'user', content: userInput });
    displayMessages();

    // Clear input field
    document.getElementById("user-input").value = "";

    // Simulate a response from John Wick (bot)
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        messages.push({ role: 'bot', content: botResponse });
        displayMessages();
    }, 1000); // Wait for 1 second before the bot responds
}

// Function to get bot response based on user input
function getBotResponse(input) {
    input = input.toLowerCase();
    
    // Custom responses based on the input
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
        return "Hello! I am always busy, but I can give you my boss's number: +19898841911. Please leave a message!";
    } else if (input.includes("where is your boss") || input.includes("boss") || input.includes("who is your boss")) {
        return "My boss is Max, he is currently unavailable but you can contact him at +19898841911.";
    } else if (input.includes("soccer")) {
        return "Max loves soccer! Always ready to talk about it.";
    } else if (input.includes("pasta")) {
        return "Max’s favorite food is pasta! Yummy!";
    } else if (input.includes("busy")) {
        return "Max is always busy with private meetings. You can message him on Instagram!";
    } else if (input.includes("help") || input.includes("support")) {
        return "How can I assist you? You can also contact Max directly at +19898841911.";
    } else {
        return "Sorry, I didn't quite catch that. Please ask something else!";
    }
}

// Function to display messages in the chat box
function displayMessages() {
    const messagesContainer = document.getElementById("messages");
    messagesContainer.innerHTML = ""; // Clear current messages
    messages.forEach(message => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(message.role === 'user' ? 'user-message' : 'bot-message');
        messageDiv.textContent = message.content;
        messagesContainer.appendChild(messageDiv);
    });
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
}
