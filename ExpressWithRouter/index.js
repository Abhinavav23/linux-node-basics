const express = require('express');
const cors = require('cors');
const app = express();
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoute');

app.use(cors());
app.use(express.json());
// http://localhost:5800/products
app.use('/product', productRouter);
// http://localhost:5800/user
app.use('/user', userRouter)

app.all('*', (req, res) => {
    res.send('default route');
})

const PORT = 5700
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})
