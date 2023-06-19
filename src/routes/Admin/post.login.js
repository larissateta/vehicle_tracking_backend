const express= require('express');
const AdminService = require('../../services/AdminService')
const {check, validationResult} = require('express-validator');
const router = express.Router();

router.post('/login',
[
    check('email', 'email is required').exists().isEmail(),
    check('password', 'password is required').exists()
],
async (req, res, next)=>{
    // #swagger.tags= ['User'];
    // #swagger.summary= "User Login";
    // #swagger.description = "User endpoint";
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors})
    }
    const {email, password} =req.body;
    const mail = email.toLowerCase();

    try{
        const admin = await AdminService.getAdminByEmail(mail);
        if(!admin) {
            return res.status(400).json({status: 'Email or password incorrect'})
        }
        const correctPassword = await admin.comparePassword(password);

        if(!correctPassword){
            console.log("heree");
            return res.status(400).json({status: 'Email or password incorrect'})
        }

        return res.status(200).json({ jwt_token: admin.createToken() })
    }catch(e){
        console.log(e);
        return res.status(500).json({errors: e})
    }
}
)

module.exports = router