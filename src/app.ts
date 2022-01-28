import  express from "express";
const app = express();
import  dotenv from "dotenv";
dotenv.config();
import  mongoose from "mongoose";
import bodyParser from "body-parser";
import  expressValidator from "express-validator";
import  postRoutes from "./routes/post";

mongoose.connect(`${process.env.MONGO_URI}`)
.then(()=> console.log('DB Connected'));
mongoose.connection.on('error', err =>{
    console.log(`DB Connection error: ${err.message}`);
});

app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', postRoutes);


const port= process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('app is listening');
});