const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({
    carName: {type: String},
    imgUrl: {type: String},
    pricePerDay: {type: Number},
    pricePerMonth: {type: Number},
    mileage: {type: Number},
    trasmission: {type: String},
    fuel: {type: String},
    brand: {type: String},
})

module.exports = mongoose.model("Cars", CarSchema);