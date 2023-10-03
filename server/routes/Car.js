const Car = require("../models/Car.js");
const router = require("express").Router();


router.get("/",async(req,res)=>{
    try{
        const carBrand = req.query.brand;
    
        const filterCars = await Car.find({brand: carBrand})
        res.status(200).json(filterCars);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;