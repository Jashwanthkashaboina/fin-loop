require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const userRoutes = require('./routes/authRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js');
const holdingRoutes = require('./routes/holdingRoutes');
const summaryRoutes = require('./routes/summaryRoutes.js');
const watchlistRoutes = require('./routes/watchListRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    credentials: true,
}));

if (process.env.NODE_ENV === "development") {
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next();
    });
}

app.use('/auth', userRoutes);
app.use('/orders', orderRoutes);
app.use("/holdings", holdingRoutes);
app.use("/summary", summaryRoutes);
app.use("/watchlist", watchlistRoutes);

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