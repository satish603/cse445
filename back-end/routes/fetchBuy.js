const express = require("express");
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');

// Route to get Buyer's buyrequest
router.get('/buyrequest', async (req, res) => {
    try{
        const buyer = await User.findById(req.user.id);
        const buyRequest = buyer.buyrequest;
        res.json(buyRequest);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Error in fetching buy request");
    }
});

module.exports = router;
