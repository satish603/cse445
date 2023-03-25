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
        default:"https://images.unsplash.com/photo-1588912914017-923900a34710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1219&q=80"
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