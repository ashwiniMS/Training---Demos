let events = require('events');

// creating an event emitter
let eventEmitter = new events.EventEmitter();

// this is the event listner
eventEmitter.on('connection', () => {
    console.log('Connection successful...');
})

// firing the connection event
eventEmitter.emit('connection');
