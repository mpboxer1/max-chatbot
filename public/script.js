async function sendMessage() {
  const input = document.getElementById('input');
  const message = input.value;
  if (!message.trim()) return;

  appendMessage("You", message);
  input.value = "";

  const res = await fetch('/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  appendMessage("Max", data.reply);
}

function appendMessage(sender, text) {
  const box = document.getElementById('messages');
  const div = document.createElement('div');
  div.innerHTML = `<strong>${sender}:</strong> ${text}`;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}
