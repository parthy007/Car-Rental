const Car = require("../models/Car.js");
const router = require("express").Router();

// Route for retrieving cars by brand
router.get("/",async(req,res)=>{
    try{
        // Extract car brand from the query parameters
        const carBrand = req.query.brand;
        
        // Find cars in the database that match the specified brand
        const filterCars = await Car.find({brand: carBrand})

        // Send a success response with the filtered cars
        res.status(200).json(filterCars);
    }catch(err){
        // Handle errors and send an appropriate error response
        res.status(500).json(err)
    }
})

module.exports = router;