const express = require("express");
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const authmiddleware = require('../middleware/authmiddleware');

// Route to get Buyer's buyrequest
router.get('/buy_history', authmiddleware, async (req, res) => {
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
