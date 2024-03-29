require("./config-files/connect_db");
const express = require('express');
var cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res, next) => {
    return res.json({ message: "Server Running" });
  });
app.use('/public',express.static('public'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/product', require('./routes/productAdd'));
app.use('/api', require('./routes/fetchproduct'));
app.use('/api', require('./routes/buy'));
app.use('/api', require('./routes/addToCart'));
app.use('/api', require('./routes/fetchUserData'));
app.use('/api', require('./routes/buyCart'));
app.use('/api', require('./routes/buyer_details'));
app.use('/api', require('./routes/buyHistory'));
app.listen(PORT, () => {
    console.log("listing to 5000");
})


