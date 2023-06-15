const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    NID: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner