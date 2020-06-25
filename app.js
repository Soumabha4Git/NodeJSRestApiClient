const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');


const getRoute = require('./routes/get');
const postRoute = require('./routes/post');
const putRoute = require('./routes/put');
const deleteRoute = require('./routes/delete');


const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUiExpress = require('swagger-ui-express');


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title : 'NodeJSRestApiClient',
            description : 'NodeJs Rest Api Oracle',
            contact : {
                name : 'Soumabha'
            },
            servers : ["http:\\localhost:8083"]
        }
    },
    apis: ["./routes/*.js"] 
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/NodeJSRestApiClient/swagger-ui.html',swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));


app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/NodeJSRestApiClient/get',getRoute);
app.use('/NodeJSRestApiClient/post',postRoute);
app.use('/NodeJSRestApiClient/put',putRoute);
app.use('/NodeJSRestApiClient/delete',deleteRoute);




app.listen(8083);