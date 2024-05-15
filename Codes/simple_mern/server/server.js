const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(bodyParser.json());


//in-memory storage for now
let DUMMY_PRODUCTS = [];

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.get('/products', (req,res,next) => {
    res.status(200).json({ products: DUMMY_PRODUCTS })
})

app.post('/product', (req,res,next) => {
    const { title, price } = req.body;
    if(!title || title.trim().length === 0 || !price || price <= 0 ){
        return res.status(401).json({ message: 'Invalid input'});
    }
    const createdProduct = {
        id: uuidv4(),
        title,
        price
    };
    DUMMY_PRODUCTS.push(createdProduct);

    res.status(201).json({message: 'Created product', product: createdProduct});
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});