const http = require('http');
const fs = require('fs');
const test  = require('./test');
require('./test');
console.log('test', test);
http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<div>Home Page</div>')
    } else if(req.url === '/file'){
        fs.readFile('./Stream/file.txt', 'utf-8', (err, file) => { 
            if(err) {
                console.log(`Error ocuurred: ${err.code} and error is ${err.message}`);
                return
            }
            // console.log(file);
            // res.write();
            res.end(file)
        })
        // const fileStream = fs.createReadStream('./Stream/file.txt');
        // fileStream.on('open', (err) => {
        //     if(err){
        //         console.log(err);
        //     }
        //     fileStream.pipe(res)
        // })
    } else if(req.url === '/video'){
        res.writeHead(200,{'content-type': 'video/mp4'})
        const videoStream = fs.createReadStream('./Stream/video2.mp4')
        // videoStream.on('open', (err) => {
        //     if(err) console.log(err);
        //     // duplex stream
        //     videoStream.pipe(res);
        // })

        videoStream.on('data', (data) => {
            res.write(data);
        })
        videoStream.on('end', (data) => {
            
            res.end();
        })
    }
    // res.end();
})
.listen(8000)