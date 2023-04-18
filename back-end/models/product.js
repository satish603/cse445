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
    imageUrl:{
        type: String,

    },
    category:{
        type: String,
        required: true,
    },
    stock:{
        type:Number,
        required:true,
    }
});

const ProductModel=mongoose.model('Product',ProductSchema);

module.exports=ProductModel;