const mongoose=require('mongoose');
const {Schema}=mongoose;

const productSchema= new Schema({
    productid:{
        type: String,
        required: true,
        unique:true
    },
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
        default:"http://localhost:5000/images/1.jpg"
    },
    category:{
        type: String,
        required: true,
    },
    count:{
        type:Number,
        required:true,
    }
});