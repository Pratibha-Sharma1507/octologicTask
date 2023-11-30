const express = require('express');
const app = express();
app.use(express.json());
const swaggerui = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc');


const option = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node js api documentation for API",
            version: "1.0.0"
        },
        servers: [
            {
                url: 'http://localhost:8000'
            }
        ]
    },
    apis: ['./Routes/vehicleTypeRoute.js','./Routes/vehicleModelRoute.js','./Routes/vehicleBookingRoute.js']
   }

app.use('/swagger',swaggerui.serve,swaggerui.setup(swaggerjsdoc(option)));


const vehicleRouter = require('./Routes/vehicleBookingRoute');
app.use('/', vehicleRouter);

const vehicleTypeRouter = require('./Routes/vehicleTypeRoute');
app.use('/', vehicleTypeRouter);


const vehicleModelRouter = require('./Routes/vehicleModelRoute');
app.use('/', vehicleModelRouter);

const port=8000;
app.listen(port,()=>{
    console.log(`server is running on ${port} port`)   
});
