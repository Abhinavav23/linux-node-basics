const mongoose = require('mongoose');

const options = {
    dbName: 'NS'
}

mongoose.connect('mongodb://localhost:27017', options)
.then(() => {
    console.log(`connected to database successfully`);
})
.catch((err) => {
    console.log(`Error Occurred: ${err.message}`);
})
