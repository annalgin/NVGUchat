function addMessage(text, type) {
	const messagesDiv = document.getElementById('messages');
	
	if (!messagesDiv) {
		return;
	}
	
	const messageDiv = document.createElement('div');
	messageDiv.classList.add('message');
	messageDiv.classList.add(type === 'user' ? 'user-message' : 'other-message');
	messageDiv.textContent = text;
	messagesDiv.appendChild(messageDiv);
	messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage() {
	const input = document.getElementById('messageInput');
	const message = input.value.trim();
	
	if (!message) {
		return;
	}

	const isChatPage = document.getElementById('messages');
	
	if (isChatPage) {
		addMessage(message, 'user');
		input.value = '';
		
		setTimeout(() => {
			addMessage('Вскоре отвечу на ваше сообщение', 'other');
		}, 1000);
	} else {
		localStorage.setItem('chatMessage', message);
		window.location.href = '2.html';
	}
}

document.addEventListener('DOMContentLoaded', function() {
	const input = document.getElementById('messageInput');
	
	if (!input) {
		return;
	}
	
	input.addEventListener('keypress', function(e) {
		if (e.key === 'Enter') {
			sendMessage();
		}
	});
	
	const savedMessage = localStorage.getItem('chatMessage');
	if (savedMessage) {
		addMessage(savedMessage, 'user');

		setTimeout(() => {
			addMessage('Вскоре отвечу на ваше сообщение', 'other');
		}, 1000);
		
		localStorage.removeItem('chatMessage');
	}
});