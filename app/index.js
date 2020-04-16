const express = require('express');
var cors = require('cors');
const app = express();
const path = require('path');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


// Middlewares //
app.use(express.json()); // Permit JSON Objects 
app.use(express.urlencoded({ extended: false })); // Exclude images from requests

// CORS //
app.use(cors());

// PATH //
app.use(express.static(path.join(__dirname, '../public')));



// Extended https://swagger.io/speficiation/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Daily API',
            description: 'API DOCUMENTATION',
            contact: {
                name: "GREAT API INFORMATION"
            },
            servers: ["http://74.208.169.91:90"]
        }
    },
    apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Routing //
app.use(require('../routes/routes'));


// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});