const mongoose=require('mongoose');
const {Schema}=mongoose;

const UserSchema= new Schema({
    name:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    phone:{
        type: Number,
        reuired: true,
    },
    cart:{
        type: Array,
        default: []
    },
    buyrequest:{
        type: Array,
        default: []
    },
    sellrequest:{
        type: Array,
        default: []
    }
});

const UserModel=mongoose.model('User',UserSchema);
module.exports=UserModel;