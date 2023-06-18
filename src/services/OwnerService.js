const Owner = require('../Repos/OwnerRepo')

class OwnerService{
    static async create(data){
        return Owner.save(data);
    }
    static async getOwnerByNID(NID){
        return Owner.findOwnerByNid(NID);
    }
    static async getAllOwners(){
        return Owner.findAll();
    }
    static async getOwnerById(id){
        return Owner.findOwnerById(id);
    }
    static async removeOwnerById(id){
        return Owner.deleteOwnerById(id);
    }
}

module.exports = OwnerService