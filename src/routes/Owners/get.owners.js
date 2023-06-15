const express = require("express");
const JWTService = require("../../services/JWTService");
const OwnerService = require("../../services/OwnerService");

const router = express.Router();
const jwt = JWTService.verifyToken;

router.get("/", jwt, async (req, res, next)=>{
    try{
        const owners = await OwnerService.getAllOwners();
        return res.status(200).json({owners})
    }catch(e){
        return res.status(500).json({errors: e})
    }
})

module.exports = router