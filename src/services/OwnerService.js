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
}

module.exports = OwnerService