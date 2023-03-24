const mongoose=require('mongoose');
const {Schema}=mongoose;

if (mongoose.models.Product) {
    delete mongoose.models.Product;
  }
  

const ProductSchema= new Schema({
    user:{
        type: String,
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

const ProductModel=mongoose.model('Product',ProductSchema);

module.exports=ProductModel;