const http = require('http');

const options = {
    method: 'GET',
    host: 'localhost',
    port: '4000',
    path: '/profile'
}

// http://localhost:4000/profile

http.request('http://localhost:4000/profile?name=Abhinav&content=sdvswdvcwefcwefcew', (res) => {
    console.log('request completed');
    // console.log(res);
    res.setEncoding('utf-8');

    let resData = ''
    res.on('data', (data) => {
        console.log('data received');
        resData += data
        // console.log('data', data);
    })
    res.on('end', () => {
        console.log(resData);
        console.log('data ended');
    })
})
.end()

// fetch('wrferf')
// .then((res) => {
//     res.json()
// })
// .catch(() => {
// })