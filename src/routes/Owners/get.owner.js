const express = require("express");
const JWTService = require("../../services/JWTService");
const OwnerService = require("../../services/OwnerService");

const router = express.Router();
const jwt = JWTService.verifyToken;

router.get("/:id", jwt, async (req, res, next)=>{
    try{

        const ownerId  = req.params.id;
        const owner = await OwnerService.getOwnerById(ownerId);
        return res.status(200).json({owner})
    }catch(e){
        return res.status(500).json({errors: e})
    }
})

module.exports = router