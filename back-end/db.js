const mongoose=require("mongoose");
require('dotenv').config({ path: './config.env' });


const uri = process.env.DATABASE;
// console.log(uri); 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })   
.then(()=>console.log("connection successful....."))
.catch((err)=>console.log(err));

module.exports= mongoose.connect;