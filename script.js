document.addEventListener("DOMContentLoaded", function () {
    const chatContent = document.getElementById("chat-content");
    const playButton = document.getElementById("playButton");
    const themeSong = document.getElementById("themeSong");

    // Add first message from the bot when page loads
    chatContent.innerHTML = "<p><strong>John Wick</strong>: I am John Wick, Max's assistant. How can I help you today?</p>";

    // Add event listener to the play button
    playButton.addEventListener("click", function () {
        themeSong.play();
        playButton.disabled = true;
        playButton.textContent = "Song Playing";
    });

    // Simulate Chatbot replies after user types something
    function chatbotReply(userMessage) {
        let botReply = "";

        if (userMessage.includes("boss")) {
            botReply = "Sorry, I'm always busy. But here's my boss's number: +19898841911";
        } else {
            botReply = "Sorry, I didn't quite catch that. Please ask something else!";
        }

        chatContent.innerHTML += `<p><strong>John Wick</strong>: ${botReply}</p>`;
        chatContent.scrollTop = chatContent.scrollHeight; // Auto-scroll to latest message
    }

    // Simple user input listener
    window.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const userMessage = prompt("Type your message:");
            if (userMessage) {
                chatContent.innerHTML += `<p><strong>You</strong>: ${userMessage}</p>`;
                chatbotReply(userMessage);
            }
        }
    });
});
