const express = require('express');
const app = express();

// Middlewares //
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routing //
app.use(require('../routes/routes'));

app.listen(4000);
console.log("Server on port 4000");