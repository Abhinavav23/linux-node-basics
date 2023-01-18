const fs = require('fs');
console.log('start');
/*
fs.mkdir('./FS/Users', {recursive: true}, (err) => {
    if(err){
        console.log(`Error ocuured: ${err.code} and error is ${err.message} ---> ASYNC`);
        return 
    }
    // further processes
    console.log('dir created successfully ---> async');
})

// creates directory recursilvely ---> checks for all the dir in the path if not created then creates one
// fs.mkdir('./FS/Users/LoggedInUsers', {recursive: true}, (err) => {
//     if(err){
//         console.log(`Error ocuured: ${err.code} and error is ${err.message}`);
//         return 
//     }
//     // further processes
//     console.log('dir created successfully');
// })

// creates the directory syncronously

try{
    fs.mkdirSync('./FS/Users/');
    console.log('dir created successfully ---> sync');
}catch(err){
    console.log(`Error ocuured: ${err.code} and error is ${err.message} ---> SYNC`);
}


console.log('end');


// fs.readdir()

// start
// dir created successfully ---> sync'
// end
// 'dir created successfully ---> async'

// start
// dir created successfully ---> async'
// end
// 'dir created successfully ---> sync'

// start
// dir created successfully ---> async'
// end
// 'error'

// start
// error
// end
// 'dir created successfully ---> sync'

// 5 - 3
// start
// dir created successfully ---> sync'
// end
// error


// ReadDir

fs.readdir('./FS', (err, files) => {
    if(err) {
        console.log(`Error ocuured: ${err.code} and error is ${err.message}`);
        return
    }
    console.log(files);
})


fs.rm('./FS/USER',{recursive: true},  (err) => {
    if(err) {
        console.log(`Error ocuured: ${err.code} and error is ${err.message}`);
        return
    }
    console.log('dir deleted successfully');
})

// File creation
fs.writeFile('./FS/Users/Abhinav.txt', 'Hi this is me', (err) => {
    if(err) {
        console.log(`Error ocuured: ${err.code} and error is ${err.message}`);
        return
    }
})

fs.appendFile('./FS/Users/User.txt', '\nHi this is user4', (err) => {
    if(err) {
        console.log(`Error ocuured: ${err.code} and error is ${err.message}`);
        return
    }
})


fs.open('./FS/Users/User1.txt', 'W', (err, file) => {
    if(err) {
        console.log(`Error ocuured: ${err.code} and error is ${err.message}`);
        return
    }
    console.log(file);
})



fs.readFile('./FS/Users/User.txt', 'utf-8', (err, file) => { 
    if(err) {
        console.log(`Error ocuured: ${err.code} and error is ${err.message}`);
        return
    }
    console.log(file);
})
*/

fs.unlink('./FS/Users/Abhinav.txt', (err) => {
    if(err) {
        console.log(`Error ocuured: ${err.code} and error is ${err.message}`);
        return
    }
})

fs.existsSync
// copyfile, readlines, existsync, isfile, isDirectory