const fs = require('fs');

// console.log('start');

setTimeout(() => {
    console.log('logging timer 1');
}, 1000)

setTimeout(() => {
    console.log('logging timer 2');
}, 1) // node adds 1 ms timer by default

// let interval = setInterval(() => {
//     console.log('logging interval 1');
// }, 1000)

// setTimeout(() => {
//     console.log('clearing interval');
//     clearInterval(interval)
// }, 5002);

setImmediate(() => {
    console.log('immidiate call');
})

fs.open('file.txt', () => {
    console.log('opening the file');
})

