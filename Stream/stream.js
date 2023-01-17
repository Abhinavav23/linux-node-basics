// readable stream
// writable stream
// duplex stream
// transform 

const fs = require('fs');
/*
for(let i = 0; i<10000; i++){
    fs.appendFile('./Stream/file.txt', `\nhi this is line ${i}`, (err) => {
        if(err){
            console.log('err');
        }
    });
}

fs.readFile('./Stream/file.txt', (err, file) => {
    if(err){
        console.log(err);
    }
    console.log(file);
})
*/

const readableStream = fs.createReadStream('./Stream/file.txt');
const writableStream = fs.createWriteStream('./Stream/FileCopy.txt')

let i = 0;

// chunk size by default is 64 kb
readableStream.on('data', (chunk) => {
    console.log(++i);
    console.log(chunk.length/1024);
    writableStream.write(chunk)
})


// const fileInfo = fs.statSync('./Stream/file.txt');

// console.log(fileInfo);