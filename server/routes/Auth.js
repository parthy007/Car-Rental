const User = require("../models/User")
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.post("/register",async(req,res)=>{
    try{
        const {username, email, password} = req.body;
    
        const salt = await bcrypt.genSalt();
        const passwordHashed = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: passwordHashed 
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
})

router.post("/login", async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email: email});
        if(!user) res.status(400).json({msg: "User don't exist."})
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg: "Invalid Credentials!"});

        const token = jwt.sign({ id: user._id}, process.env.SECRET_KEY);
        delete user.password;
        res.status(200).json({token, user});
    }catch(err){
        res.status(500).json({error: err.message})
    }
})

module.exports = router;