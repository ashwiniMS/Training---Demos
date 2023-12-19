var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('connection', function () {
    console.log('Connection successful...');
});
eventEmitter.emit('connection');
eventEmitter.emit('connections');
