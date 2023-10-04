const User = require("../models/User")
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Route for user registration
router.post("/register",async(req,res)=>{
    try{
        // Extract user data from the request body
        const {username, email, password} = req.body;
        
        // Generate a salt and hash the user's password
        const salt = await bcrypt.genSalt();
        const passwordHashed = await bcrypt.hash(password, salt);

        // Create a new user instance with hashed password
        const newUser = new User({
            username,
            email,
            password: passwordHashed 
        })

        // Save the user to the database
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        // Handle errors and send an appropriate response
        res.status(500).json({error: err.message});
    }
})


// Route for user login
router.post("/login", async(req,res)=>{
    try{
        // Extract email and password from the request body
        const {email,password} = req.body;

        // Find a user by their email in the database
        const user = await User.findOne({email: email});
        if(!user) res.status(400).json({msg: "User don't exist."})
        
        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        // If passwords don't match, return an error response
        if(!isMatch) return res.status(400).json({msg: "Invalid Credentials!"});


        // Generate a JSON Web Token (JWT) for authentication
        const token = jwt.sign({ id: user._id}, process.env.SECRET_KEY);

        // Remove password from user object and send the token and user data
        delete user.password;
        res.status(200).json({token, user});
    }catch(err){
        // Handle errors and send an appropriate response
        res.status(500).json({error: err.message})
    }
})

module.exports = router;