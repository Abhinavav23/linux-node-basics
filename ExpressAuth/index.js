const express = require('express');
const app = express();
require('dotenv').config()

require('./db/connectDatabase');

const userRouter = require('./routes/userRoute');
app.use(express.json());
app.use('/', userRouter);

console.log(process.env);
app.listen(process.env.PORT, () => {
    console.log(`Auth server running on ${process.env.PORT}`);
})
