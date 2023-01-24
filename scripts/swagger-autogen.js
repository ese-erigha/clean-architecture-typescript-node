// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['/server.js'];

swaggerAutogen(outputFile, endpointsFiles);
