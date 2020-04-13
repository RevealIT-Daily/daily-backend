const express = require('express');
var cors = require('cors');
const app = express();

// Middlewares //
app.use(express.json()); // Permit JSON Objects 
app.use(express.urlencoded({ extended: false })); // Exclude images from requests

// CORS //
app.use(cors());

// Routing //
app.use(require('../routes/routes'));

// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});