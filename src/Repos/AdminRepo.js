const Admin = require('../models/adminModel');

class AdminRepo{
    static async save(data){
        return Admin.create(data);
    }
    static async findAdminByEmail(email){
        return Admin.findOne({email}).exec();
    }
}

module.exports = AdminRepo