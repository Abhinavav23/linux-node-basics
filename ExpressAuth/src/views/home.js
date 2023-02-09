console.log('homepage ');

const name = 'Abhinav'

fetch("http://localhost:5700/product")
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data);
})