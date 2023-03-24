const express=require("express");
const router=express.Router();
const Products=require('../models/product');
const { body, validationResult } = require('express-validator');

//Route 1: To get product using get
router.get('/getproduct',async(req,res)=>{
    try {
        const data=await Products.find();
        res.json(data); 
    }catch(err){
        console.error(err.message);
        res.status(500).send("Error in Fetchcing products");
    }
})

module.exports=router;