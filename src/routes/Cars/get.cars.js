const express = require('express');
const CarService = require('../../services/CarService');
const JWTService = require('../../services/JWTService');
const router = express.Router();

const jwt = JWTService.verifyToken;
router.get('/', jwt, async (req, res, next)=>{
    // #swagger.tags= ['Owner'];
    // #swagger.summary= "Get Owners";
    try{
        const cars = await CarService.getAllCars();
        return res.status(200).json({cars});
    }catch(e){
        return res.status(500).json({errors: e});
    }
})

module.exports = router;