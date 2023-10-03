const express = require('express')
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const carRoute = require("./routes/Car")
const authRoute = require("./routes/Auth")
const cors = require("cors")

dotenv.config();


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection successfull"))
.catch( err => console.log(err) ) 

const PORT = process.env.PORT || 3001

app.use(cors({
    origin: ["http://localhost:3000","https://driveease.vercel.app/register"],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'OPTIONS', 'ORIGIN'],
    credentials: true
}));
app.use(express.json());
app.use("/car",carRoute);
app.use("/auth",authRoute);

app.listen(PORT, ()=>{
    console.log(`Backend server is running on ${PORT}`)
})