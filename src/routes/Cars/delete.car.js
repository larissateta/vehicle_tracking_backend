const express = require("express");
const CarService = require("../../services/CarService");
const JWTService = require("../../services/JWTService")
const router = express.Router();

const jwt = JWTService.verifyToken;

router.delete("/:carId", jwt, async (req, res, next)=>{
    try{
        const carId= req.params.carId;

        await CarService.removeCarById(carId);
        return res.status(200).json({message: "Car deleted successfully"});
    }catch(e){
        return res.status(400).json({error: e.message});
    }
});

module.exports = router