const event = require('events'); // import events module

const eventEmitter = new event(); // create event emitter object

// listener for "response" event
eventEmitter.on('response', () => {
    console.log("data received");
});

// listener for "hello" event (accepts data)
eventEmitter.on('hello', (name) => {
    console.log(`hello ${name}`);
});

// emit events (trigger listeners)
eventEmitter.emit('response');
eventEmitter.emit('hello', 'ashwin');
