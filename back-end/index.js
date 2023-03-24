require ("./db");
const express = require('express');
var cors = require('cors');
const PORT= process.env.PORT || 5000;

const app=express();
app.use(express.json());
app.use(cors());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/product',require('./routes/productAdd'));
app.use('/api',require('./routes/fetchproduct'));
app.use('/api',require('./routes/buy'));

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(PORT,()=>{
    console.log("listing to 5000");
})


