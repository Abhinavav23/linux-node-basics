const express = require('express');
const app = express();
require('dotenv').config()

require('./src/db/connectDatabase');

const userRouter = require('./src/routes/userRoute');
const productRouter = require ('./src/routes/productRoute');

app.use(express.static('./src/views'));
// set the template engine we are using
app.set('view engine', 'pug');

app.set('views', './src/views')
app.use(express.json());
app.use('/', userRouter);
app.use('/', productRouter);


app.listen(process.env.PORT, () => {
    console.log(`Auth server running on ${process.env.PORT}`);
})
