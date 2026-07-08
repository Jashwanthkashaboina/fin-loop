require("dotenv").config();
const mongoose = require("mongoose");
const Watchlist = require("./models/Watchlist");

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("Connected");

    // c= process.argv[2];

    const watchlist = 
    [
      {
        name: "INFY",
        price: 1562.45,
        percent: "-1.24%",
        isDown: true,
      },
      {
        name: "TCS",
        price: 3845.15,
        percent: "+0.81%",
        isDown: false,
      },
      {
        name: "RELIANCE",
        price: 2956.35,
        percent: "+1.12%",
        isDown: false,
      },
      {
        name: "HDFCBANK",
        price: 1718.9,
        percent: "-0.43%",
        isDown: true,
      },
      {
        name: "ICICIBANK",
        price: 1284.5,
        percent: "+0.94%",
        isDown: false,
      },
      {
        name: "SBIN",
        price: 842.15,
        percent: "+1.37%",
        isDown: false,
      },
      {
        name: "LT",
        price: 3628.4,
        percent: "-0.68%",
        isDown: true,
      },
      {
        name: "BHARTIARTL",
        price: 1584.2,
        percent: "+0.56%",
        isDown: false,
      },
      {
        name: "ITC",
        price: 437.8,
        percent: "-0.21%",
        isDown: true,
      },
      {
        name: "AXISBANK",
        price: 1187.65,
        percent: "+0.73%",
        isDown: false,
      },
      {
        name: "KOTAKBANK",
        price: 1824.3,
        percent: "-1.05%",
        isDown: true,
      },
      {
        name: "HCLTECH",
        price: 1642.9,
        percent: "+1.46%",
        isDown: false,
      },
      {
        name: "WIPRO",
        price: 548.75,
        percent: "-0.92%",
        isDown: true,
      },
      {
        name: "MARUTI",
        price: 12784.6,
        percent: "+0.64%",
        isDown: false,
      },
      {
        name: "TATAMOTORS",
        price: 978.45,
        percent: "-1.71%",
        isDown: true,
      },
      {
        name: "TATASTEEL",
        price: 168.95,
        percent: "+2.08%",
        isDown: false,
      },
      {
        name: "ASIANPAINT",
        price: 2875.4,
        percent: "-0.58%",
        isDown: true,
      },
      {
        name: "SUNPHARMA",
        price: 1764.2,
        percent: "+1.19%",
        isDown: false,
      },
      {
        name: "ULTRACEMCO",
        price: 11248.8,
        percent: "+0.42%",
        isDown: false,
      },
      {
        name: "BAJFINANCE",
        price: 7215.6,
        percent: "-1.34%",
        isDown: true,
      },
    ];

    await Watchlist.deleteMany({  });
    await Watchlist.insertMany(watchlist);

    console.log("Watchlist seeded successfully!");

    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit();
  });