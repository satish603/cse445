const mongoose=require('mongoose');
const {Schema}=mongoose;

if (mongoose.models.User) {
    delete mongoose.models.User;
    }

const UserSchema= new Schema({
    name:{
        type: String,
        required: true,
    },
    regNo:{
        type: Number,
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