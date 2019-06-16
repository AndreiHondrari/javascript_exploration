
const MessageSource = {
    HERE: 0, REMOTE: 1
};

class Message {
    constructor(text, source) {
        this.text = text;
        this.source = source;
    }
};

var socket = io();


let app = new Vue({
    el: "#iotester",
    data: {
        messages: [
        ]
    },
    computed: {
        MessageSource: function() {
            return MessageSource;
        }
    },
    methods: {
        sendSomething() {
            let text = chance.sentence({ words: 5 });
            this.messages.push(new Message(`Send ${text}`, MessageSource.HERE));
            socket.emit('message', text);
        },

        broadcastAllClients() {
            let text = chance.sentence({ words: 5 });
            this.messages.push(new Message(`Broadcast ${text}`, MessageSource.HERE));
            socket.emit('broadcast', text);
        }
    }
});

socket.on('receivedMessage', function(text) {
    app.messages.push(new Message(`Received ${text}`, MessageSource.REMOTE));
});

socket.on('broadcastMessage', function(text) {
    app.messages.push(new Message(`Broadcasted ${text}`, MessageSource.REMOTE));
});

socket.on('broadcast', function(text) {
    app.messages.push(new Message(`Broadcasted ${text}`, MessageSource.REMOTE));
});
