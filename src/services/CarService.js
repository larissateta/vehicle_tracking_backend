const CarModel = require("../models/Car");
const CarRepo = require("../Repos/CarRepo")




class CarService {
    static async create(chasisNumber, manufacturer, manufactureYear, price, plateNumber, model, owner){
        
        const car = new CarModel({
            chasisNumber,
            manufacturer,
            manufactureYear,
            price,
            plateNumber,
            model,
            owner
        })
        const savedOwner = await CarRepo.save(car);
        return savedOwner;
    }
    static async getAllCars(){
        return CarRepo.findAll();
    }
    static async removeCarById(id){
        return CarRepo.deleteById(id);
    }
}

module.exports = CarService