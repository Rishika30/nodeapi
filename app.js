const express= require('express');
const app= express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const postRoutes= require('./routes/post');


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser : true})
.then(()=> console.log('DB Connected'));

mongoose.connection.on('error', err =>{
    console.log(`DB Connection error: ${err.message}`);
});

app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', postRoutes);


const port= process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log('app is listening');
});