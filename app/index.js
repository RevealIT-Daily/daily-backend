const express = require('express');
var cors = require('cors');
const app = express();
const path  = require('path');

// Middlewares //
app.use(express.json()); // Permit JSON Objects 
app.use(express.urlencoded({ extended: false })); // Exclude images from requests

// CORS //
app.use(cors());

// PATH //
app.use(express.static(path.join(__dirname,'../public')));

// Routing //
app.use(require('../routes/routes'));

// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});