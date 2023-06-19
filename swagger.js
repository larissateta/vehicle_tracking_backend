const swaggerAutogen = require('swagger-autogen')();


const outputFile = './swagger_output.json';
const authRoutes =["./src/routes/index.js"]

const doc = {
  info: {
    title: 'API documentations',
    description: 'API documentation',
    version: '1.0.0',
  },
  securityDefinitions: {
    BearerAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
  },
  security: [
    {
      BearerAuth: [],
    },
  ],
  host: 'localhost:4000',
  basePath: '/api',
  schemes: ['http'], 
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: "User",
      description: "User endpoint",
    },
    {
      name: "Car",
      description: "Car endpoint",
    },
    {
      name: "Owner",
      description: "Owner endpoint",
    },
  ],
  components: {
    securitySchemas: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ]
  }
  
}

swaggerAutogen(outputFile, authRoutes, doc).then(()=>{
  require('./server')
});