const jwt = require('jsonwebtoken')

class JWTService{
    constructor(payload, expire = '365 days'){
        this.payload = payload,
        this.secret = process.env.JWT_SECRET_KEY,
        this.expireIn = expire
    }

    create(){
        return jwt.sign(this.payload.toObject(), this.secret, {expiresIn: this.expireIn});
    }

    static getToken(req){
        if(req.headers && req.headers.authorization && req.headers.authorization.split('')[0] === 'Bearer'){
            return req.headers.authorization.split('')[1];
        }
        return null;
    }

    static verifyToken(req, res, next){
        // const token = JWTService.getToken(req);
        const token = req.headers.authorization.split(' ')[1];
        if(token){
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = decoded;
            next();
        }else{
            return res.status(400).json({status : 'No token provided'})
        }
    }
}

module.exports = JWTService