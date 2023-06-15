const dotenv= require('dotenv');
const dbConnection = require('./src/db/dbConnection');
const cors  = require('cors');
const express = require('express');
const app = express();
const http = require('http')
const logger = require('morgan')
const routeHandler =  require("./src/routes")
const swaggerDocs = require('./swagger.json')
const swaggerUi = require("swagger-ui-express");


dbConnection();
app.use(
    cors({
        origin: "*",
        credentials: true
    })
)

app.use(logger('dev'))
app.use(express.urlencoded({extended: true, limit: '50mb', parameterLimit: 50000}));
app.use(express.json({limit: '50mb', extended: true}))
app.use(express.static('public'));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api', routeHandler);
app.use((req, res)=> res.status(404).json({error: 'We can not get what you are looking for'}))

const server = http.createServer(app);

server.listen(4000);

console.log("Listening on port 4000");