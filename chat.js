if('WebSocket' in window) {
    console.log("WebSocket supported")
} else {
    console.log("WebSocket is not supported")
}

var socket = new WebSocket('ws://localhost:8080/');


socket.onopen = function() {
    console.log('Connection open!');
    //socket.send('Hey server, whats up?');
};


socket.onclose = function(event) {
    if (event.wasClean) {
        alert('Соединение закрыто чисто');
    } else {
        alert('Обрыв соединения');
    }
    alert('Код: ' + event.code + ' причина: ' + event.reason);
};

socket.onmessage = function(event) {
    alert("Получены данные " + event.data);
};

socket.onerror = function(error) {
    alert("Ошибка " + error.message);
    console.log(error)
};


document.addEventListener("DOMContentLoaded", function(event) {
    chatForm = document.forms.chat;

    chatForm.onsubmit = function() {
        var outgoingMessage = this.message.value;
        console.log('Message: '+outgoingMessage);

        socket.send(outgoingMessage);
        return false;
    };
});

