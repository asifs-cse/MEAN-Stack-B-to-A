const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// mongoose.connect("mongodb://localhost:27017/testProductBD")
// .then(()=>console.log("db is connected"))
// .catch((err)=>{
//     console.log("db is not connected");
//     console.log(err);
//     process.exit(1);
// });

//create porduct schema
const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String
});
//create product model

const product = mongoose.model("Products", productSchema);

const dbConnect = async ()=>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/testProductBD");
        console.log("db is connect");
    }catch(error){
        console.log("db is not connect");
        console.log(error.message);
        process.exit(1);
    }
};



app.get('/',(req, res)=>{
    res.send('Welcome to home page');
});

app.post('/products', async(req, res)=>{
    try{
        const title= req.body.title;
        const price= req.body.price;
        const description = req.body.description;

        const newProduct = new product({
            title: title,
            price: price,
            description: description,
        });

        const productData = await newProduct.save();
        res.send(productData);
        console.log(title);
    }catch(error){
        res.status(500).send({message: error});
    }
});

app.listen(PORT, async ()=>{
    console.log(`Server is open at http://localhost:${PORT}`);
    await dbConnect();
});