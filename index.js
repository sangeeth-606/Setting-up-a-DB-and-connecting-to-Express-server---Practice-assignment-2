const express = require('express');
require('dotenv').config();
const { resolve } = require('path');
const userRoutes = require('./userController'); //
const connectDb = require('./db');


const app = express();
const port = 3012;

app.use(express.json()); 
app.use(express.static('static'));
connectDb();


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


app.use(userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
