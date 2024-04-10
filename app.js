const express = require('express');
const predictRoute = require('./routes/predict');
const loginRoute = require('./routes/login');
const homeRoute = require('./routes/home');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', homeRoute); 
app.use('/predict',predictRoute);
app.use('/login', loginRoute);

const PORT = 3000;
app.listen(PORT, function() {
    console.log(`Server is running on http://localhost:${PORT}`);
});