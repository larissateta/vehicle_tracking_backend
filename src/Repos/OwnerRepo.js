const Owner = require('../models/ownerModel')

class OwnerRepo{
    static async save(data){
        return Owner.create(data);
    }
    static async findOwnerByNid(NID){
        return Owner.findOne({NID}).exec();
    }
    static async findAll(){
        return Owner.find({}).exec();
    }
    static async findOwnerById(id){
        return Owner.findById(id);
    }
    static async deleteOwnerById(id){
        return Owner.deleteOne({id}).exec();
    }
}

module.exports = OwnerRepo