const fs = require('fs');

// console.log('start');

// setTimeout(() => {
//     console.log('logging timer 1');
// }, 0)

// setTimeout(() => {
//     console.log('logging timer 2');
// }, 0) // node adds 1 ms timer by default

// let interval = setInterval(() => {
//     console.log('logging interval 1');
// }, 1000)

// setTimeout(() => {
//     console.log('clearing interval');
//     clearInterval(interval)
// }, 5002);

// setImmediate(() => {
//     console.log('immidiate call');
// })

fs.open('file.txt', () => {
    console.log('opening the file');

    setTimeout(() => {
        console.log('logging timer from openfile');
    },1000)
    setImmediate(() => {
        console.log('logging immidiate from openfile');
    })
    Promise.resolve().then(() => console.log('promise resolved'));
    process.nextTick(() => {
        console.log('process log');
        setTimeout(() => {
            console.log('timer from process');
        }, 0);
    })
})

// console.log('end');

// opening file
// process log
// promise 
// immidiate 
// timer


