const Event = require('events');

// console.log(Event);
class LogEvent extends Event{}

const successLogEvents = new LogEvent();

successLogEvents.addListener('success', () => {
    console.log('successLogEvents called');
    // open a file
    // log the results 
})

successLogEvents.addListener('loggingSuccessful', () => {
    const a = 20

    console.log('loggingSuccessful called', a);
    // open a file
    // log the results 
})

successLogEvents.emit('success');
successLogEvents.emit('success');
successLogEvents.emit('loggingSuccessful');
