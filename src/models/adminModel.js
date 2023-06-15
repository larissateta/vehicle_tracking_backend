const mongoose = require("mongoose")
const JWTService = require('../services/JWTService')
const bcrypt = require('bcrypt')

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    NID: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    }
})

adminSchema.index({ email:1 });

adminSchema.methods.comparePassword =  function comparePassword(adminPassword){
    return bcrypt.compare(adminPassword, this.password);
}

adminSchema.methods.createToken = function (){
    const jwt = new JWTService(this);
    return jwt.create();
}
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin