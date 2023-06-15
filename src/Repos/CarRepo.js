const CarModel = require("../models/Car")

class CarRepo{
    static async save(data){
        return CarModel.create(data);
    }
    static async getCarByPlate(plateNumber){
        return CarModel.findOne({plateNumber}).exec();
    }
    static async findAll(){
        return CarModel.find({}).exec();
    }
    static async deleteById(id){
        return CarModel.deleteOne({id}).exec();
    }
}

module.exports= CarRepo;