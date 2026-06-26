require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/authRoutes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use('/auth', userRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(() =>{
        console.log('Connected to Database');
    }).catch((err) =>{
        console.log('Database connection Error : ', err);
    });


app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK'
    });
});

app.listen(8080, () => {
    console.log('Server listening on PORT 8080');
});