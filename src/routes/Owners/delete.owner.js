const express = require("express");
const CarService = require("../../services/CarService");
const JWTService = require("../../services/JWTService");
const OwnerService = require("../../services/OwnerService");
const router = express.Router();

const jwt = JWTService.verifyToken;

router.delete("/:id", jwt, async (req, res, next)=>{
    try{
        const ownerId= req.params.ownerId;

        await OwnerService.removeOwnerById(ownerId);
        return res.status(200).json({message: "Car deleted successfully"});
    }catch(e){
        return res.status(400).json({error: e.message});
    }
});

module.exports = router