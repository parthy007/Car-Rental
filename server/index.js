const express = require('express')
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const carRoute = require("./routes/Car")
const authRoute = require("./routes/Auth")
const cors = require("cors")

dotenv.config();  // Load environment variables from a .env file

// Connect to the MongoDB database
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection successfull"))
.catch( err => console.log(err) ) 

// Define the port for the server
const PORT = process.env.PORT || 3001

// Enable CORS for specific origins, methods, and headers
app.use(cors({
    origin: ["http://localhost:3000","https://driveease.vercel.app"],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'OPTIONS', 'ORIGIN'],
    credentials: true
}));
// Parse JSON request bodies
app.use(express.json());
// Define routes for handling car-related and authentication requests
app.use("/car",carRoute);
app.use("/auth",authRoute);



// Start the server and listen on the specified port
app.listen(PORT, ()=>{
    console.log(`Backend server is running on ${PORT}`)
})