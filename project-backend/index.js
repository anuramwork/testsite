const express = require('express')
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoutes')
const cors = require('cors');


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/user', userRoute);

const dbConnect = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/testsite");
        console.log("Database connected successfully")
    }catch(error){
        console.log("Error occured: ",error)
    }
}

dbConnect();

app.listen(5000,()=>{
    console.log("App is running on port : 5000")
})