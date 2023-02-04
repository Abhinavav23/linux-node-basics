const express = require('express');
const app = express();
require('./db/connectDatabase');
const userRouter = require('./routes/userRoute');
app.use(express.json());
app.use('/', userRouter);

const PORT = 5800
app.listen(PORT, () => {
    console.log(`Auth server running on ${PORT}`);
})