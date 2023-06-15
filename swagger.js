const swaggerjsdoc = require("swagger-jsdoc");

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: "Vehicle Tracking System API",
            version: "1.0.0",
            description: "APIs for tracking system"
        },
    },
    apis: ['./src/routes/*.js'],
}

const specs = swaggerjsdoc(options);
module.exports = specs