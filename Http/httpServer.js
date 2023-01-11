const http = require('http')

const server = http.createServer((request, response) => {
    // console.log(request.headers.host);
    // console.log(request.url);
    if(request.url === '/'){
        // response.write('this is home page');
        response.write('<h1>Home Page</h1>')
    } else if(request.url === '/profile'){
        // response.write('this is profile page');
        response.write('{name: "abhinav"}')
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