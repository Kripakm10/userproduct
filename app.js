var express = require('express');
var dotenv = require('dotenv');

 var userRoutes = require('./routes/userRoute')
 var productRoutes = require('./routes/productRoute')
var app = express();

app.use(express.json());
dotenv.config();
require('./db');
var port = process.env.port;

// changes
app.use('/api',userRoutes);
app.use('/app',productRoutes);
app.listen(port,(req,res)=>{ 
    console.log(`Server is up and running in ${port}`)

})