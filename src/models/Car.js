const mongoose= require('mongoose');
const Owner = require('./ownerModel');

const CarSchema = mongoose.Schema({
    chasisNumber: {
        type: String,
        required: true
    },
    manufacturer: {
        type:String,
        required: true
    },
    manufactureYear: {
        type: Date,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    plateNumber: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Owner",
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

const CarModel = mongoose.model("Car", CarSchema);

module.exports= CarModel;