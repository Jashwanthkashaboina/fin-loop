require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./routes/user.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(() =>{
        console.log('Connected to Database');
    }).catch((err) =>{
        console.log('Database connection Error : ', err)
    });

app.listen(8080, () => {
    console.log('Server listening on PORT 8080');
});