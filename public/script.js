let messages = document.getElementById('messages');

function sendMessage() {
    let userInput = document.getElementById('user-input').value;

    // Show the user message
    let userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerHTML = `<strong>You:</strong> ${userInput}`;
    messages.appendChild(userMessage);

    // Send the message to Max (simulate Max response)
    let botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.innerHTML = `<strong>Max (Robot):</strong> ${getMaxResponse(userInput)}`;
    messages.appendChild(botMessage);

    // Scroll the chat to the bottom
    messages.scrollTop = messages.scrollHeight;

    // Clear the input field
    document.getElementById('user-input').value = '';
}

function getMaxResponse(input) {
    // Max's responses and John Wick's assistant comments
    const responses = {
        "hello": "Hey there! John Wick is ready to assist me. How can we help you today?",
        "how are you": "I'm doing great, thanks for asking! John Wick and I are here to assist.",
        "favorite food": "My favorite food is pasta! What's yours?",
        "timetable": "I wake up at 4 AM and sleep at 10 PM. Only available for private meetings!",
        "soccer": "I love soccer! Do you play?"
    };

    // Default response if no match is found
    return responses[input.toLowerCase()] || "Sorry, I didn't understand that. Ask John Wick for help!";
}
