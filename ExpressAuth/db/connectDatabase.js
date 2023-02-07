const mongoose = require('mongoose');

const options = {
    dbName: 'NS'
}

mongoose.connect(process.env.MONGODB_CONNECTION_URL, options)
.then(() => {
    console.log(`connected to database successfully`);
})
.catch((err) => {
    console.log(`Error Occurred: ${err.message}`);
})
