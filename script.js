const messages = [
    "Пойдем гулять в парк?",
    "Кажется, дождь собирается. Лучше пойдем в кино!",
    "Давай, сегодня как раз вышел новый фильм.",
    "Встречаемся через час у кинотеатра."
];

const chatBox = document.getElementById('chat');

messages.forEach((message, index) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    if (index % 2 === 0) {
        messageElement.classList.add('friend');
        messageElement.textContent = `Друг: ${message}`;
    } else {
        messageElement.classList.add('you');
        messageElement.textContent = `Вы: ${message}`;
    }

    chatBox.appendChild(messageElement);
});