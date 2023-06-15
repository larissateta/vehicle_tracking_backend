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
}

module.exports = OwnerRepo