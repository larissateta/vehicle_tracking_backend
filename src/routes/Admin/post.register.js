const express = require('express')
const {check, validationResult} = require('express-validator');
const AdminService = require('../../services/AdminService');
const router= express.Router();
const bcrypt = require('bcrypt');

router.post('/register',
[
    check('name', 'name is required').exists(),
    check('phone', 'phone is required').exists(),
    check('email', 'email is required').exists().isEmail(),
    check('NID', 'National ID is required').exists(),
    check('password', 'password is required').isLength({min: 6})
],
async (req, res, next)=>{
    // #swagger.tags= ['User'];
    // #swagger.summary= "Register User";
    // #swagger.description = "User endpoint";
    const errors = validationResult(req);
    console.log(req.body); // Log the request body
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {name, phone, email, NID, password} = req.body;
    const mail = email.toLowerCase();
    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        const checkMail = await AdminService.getAdminByEmail(mail);

        if(checkMail){
            console.log("gjhn");
            return res.status(400).json({status: 'Email already exists'})
        }
        const admin = await AdminService.create({
            name,
            phone, 
            NID,
            email: mail,
            password: hashedPassword
        });
        console.log('Admin created successfully!');
        return res.status(200).json({jwt_token: admin.createToken()});
    }catch(e){
        console.error('Error creating admin:', e);
        return res.status(500).json({errors: e});
    }
}
)

module.exports = router