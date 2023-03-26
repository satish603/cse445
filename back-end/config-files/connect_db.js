const mongoose=require("mongoose");
require('dotenv').config();
const uri = process.env.DATABASE;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })   
.then(()=>console.log("connection successful....."))
.catch((err)=>console.log(err));

module.exports= mongoose.connect;