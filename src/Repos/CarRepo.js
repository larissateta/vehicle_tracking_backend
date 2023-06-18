const CarModel = require("../models/Car")

class CarRepo{
    static async save(data){
        return CarModel.create(data);
    }
    static async findCarByPlate(plateNumber){
        return CarModel.findOne({plateNumber}).exec();
    }
    static async findAll(){
        return CarModel.find({}).exec();
    }
    static async deleteById(id){
        return CarModel.deleteOne({id}).exec();
    }
    static async findCarByTimestamp(timestamp){
        return CarModel.findOne({timestamp}).exec();
    }
}

module.exports= CarRepo;