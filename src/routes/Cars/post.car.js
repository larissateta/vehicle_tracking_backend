const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const CarService = require('../../services/CarService');
const JWTService = require('../../services/JWTService');

// const generatePlate= ()=>{
//     let plateNumber = "RAA001A"
//     const prefix = plateNumber.substring(0,3);
//     const numberPart= parseInt(plateNumber.substring(3,6));
//     const letterPart= plateNumber.substring(6, 7);

//     const newNumber = numberPart +1;
    
//     if(newNumber == 324){
//         numberPart= 001;
//         letterPart = String.fromCharCode(letterPart.charCodeAt(0) +1);
//     }
//     plateNumber = prefix + numberPart.toString().padStart(3, '0') +letterPart;
//     console.log(plateNumber);
//     return plateNumber;
// }
function generatePlate() {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let plateNumber = "";
    // Generate the first three letters
    for (let i = 0; i < 3; i++) {
      let charIndex = Math.floor(Math.random() * 26);
      plateNumber += String.fromCharCode("A".charCodeAt(0) + charIndex);
    }
    // Generate the three numbers
    for (let i = 0; i < 3; i++) {
      let charIndex = Math.floor(Math.random() * 10);
      plateNumber += characters.charAt(charIndex);
    }
    // Generate the final letter
    let charIndex = Math.floor(Math.random() * 26);
    plateNumber += String.fromCharCode("A".charCodeAt(0) + charIndex);
    return plateNumber;
  }
router.post('/register',
[
    check("chasisNumber", "chasisNumber is Required").exists(),
    check("manufacturer", "manufacturer is required").exists(),
    check("manufactureYear", "the manufacture year is required").exists(),
    check("price", "Price is required").exists(),
    check("model", "Model is required").exists(),
    check("owner", "Owner is required").exists()
],
async (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors});
    }
    try{
        const plate = generatePlate();
        const car = await CarService.create(
            req.body.chasisNumber, 
            req.body.manufacturer, 
            req.body.manufactureYear, 
            req.body.price, 
            plate,
            req.body.model, 
            req.body.owner
        );
        return res.status(200).json({car});
    }catch(e){
        console.error(e);
        return res.status(400).json({error: e});
    }
 
}
)

module.exports = router;