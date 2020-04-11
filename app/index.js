const express = require('express');
const app = express();

// PRUEBA //

// Middlewares //
app.use(express.json()); // Permit JSON Objects 
app.use(express.urlencoded({ extended: false })); // Exclude images from requests

// Routing //
app.use(require('../routes/routes'));

app.set('port', process.env.PORT || 4000);
console.log("Server on port "+app.get('port'));