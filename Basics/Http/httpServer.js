const http = require('http');
const url = require('url');
const queryString = require('querystring');
const fs = require('fs');

const server = http.createServer((request, response) => {
    // console.log(request.headers.host);
    // console.log(request.url);
    console.log('request received');
    console.log('string form', request.url);
    const parsedUrl = url.parse(request.url);
    console.log('parsed form', parsedUrl);
    // const myParams = new URLSearchParams(parsedUrl.query)

    const myParams = queryString.parse(parsedUrl.query);
    console.log('queryParams', myParams);

    // fs.existsSync
    fs.mkdir(`./Http/Users/${myParams.name}`, (err) => {
        // handle the error
    })
    fs.appendFile(`./Http/Users/${myParams.name}/${myParams.name}.txt`, `${myParams.content}`, (err) => {
        // handle the error
    })
    
    if(request.url === '/'){
        // response.write('this is home page');
        response.write('<h1>Home Page</h1>')
    } else if(request.url === '/profile'){
        // response.write('this is profile page');
        response.write('{name: "abhinav"}')
        response.write('{add: "India"}')
    } else{
        // response.write('this is default page');
        response.write('<h1>default Page</h1>')
    }
    // console.log('server handler getting called');
    
    response.end();
});

// Event emitter is used internally 
// server.addListener('error', () => {
//     console.log('error occurred');
// })

// server.emit('error')

const PORT = 4000
const host = '127.0.0.1'

server.listen(PORT, host, () => {
    console.log(`server is running at port: ${PORT}`);
})