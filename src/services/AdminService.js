const AdminRepo = require('../Repos/AdminRepo')

class AdminService{
    static async create(data){
        return AdminRepo.save(data);
    }
    static async getAdminByEmail(email){
        return AdminRepo.findAdminByEmail(email);
    }
}

module.exports = AdminService