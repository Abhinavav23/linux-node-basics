const express = require('express');
const app = express();
require('./db/connectDatabase');
const userRouter = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
app.use(express.json());
app.use('/', userRouter);
app.use('/product', productRoute)

const PORT = 5700
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})