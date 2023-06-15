const express = require('express');
const OwnerService = require("../../services/OwnerService")
const {check, validationResult } = require('express-validator')
const router = express.Router();

router.post('/register',
[
    check("name", "name is required").exists(),
    check("NID", "national id is required ").exists(),
    check("phone", "phone is required").exists(),
    check("address", "address is required").exists()
],
async (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors})
    }
    try{
        const owner = await OwnerService.create(req.body);
        return res.status(200).json({owner});
    }catch(e){
        console.log(e);
        return res.status(500).json({error: e});
    }
}
)

module.exports = router