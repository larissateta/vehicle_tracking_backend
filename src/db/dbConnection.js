const mongoose = require("mongoose")
require('dotenv').config();

const dbConnection = async ()=>{
    mongoose.connect(
        process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true
        }
    ).then(()=>{
        console.log("Connected successfully!");
    }).catch((e)=>{
        console.error(e);
    })
}

module.exports= dbConnection