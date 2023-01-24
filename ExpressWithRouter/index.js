const express = require('express');

const app = express();
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoute');


app.use(express.json());
// http://localhost:5800/products
app.use('/products', productRouter);
// http://localhost:5800/user
app.use('/user', userRouter)

app.all('*', (req, res) => {
    res.send('default route');
})

const PORT = 5800
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})
