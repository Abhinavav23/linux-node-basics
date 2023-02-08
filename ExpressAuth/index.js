const express = require('express');
const app = express();
require('dotenv').config()

require('./src/db/connectDatabase');

const userRouter = require('./src/routes/userRoute');
app.use(express.json());
app.use('/', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Auth server running on ${process.env.PORT}`);
})
