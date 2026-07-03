require("dotenv").config();
const mongoose = require("mongoose");
const Watchlist = require("./models/Watchlist");

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("Connected");

    const userId = "685d1234567890abcdef5757";

    const watchlist = [
      {
        userId,
        name: "INFY",
        price: 1562.45,
        percent: "-1.24%",
        isDown: true,
      },
      {
        userId,
        name: "TCS",
        price: 3845.15,
        percent: "+0.81%",
        isDown: false,
      },
      {
        userId,
        name: "RELIANCE",
        price: 2956.35,
        percent: "+1.12%",
        isDown: false,
      },
      {
        userId,
        name: "HDFCBANK",
        price: 1718.90,
        percent: "-0.43%",
        isDown: true,
      },
      {
        userId,
        name: "ICICIBANK",
        price: 1284.50,
        percent: "+0.94%",
        isDown: false,
      },
    ];

    await Watchlist.deleteMany({ userId });
    await Watchlist.insertMany(watchlist);

    console.log("Watchlist seeded successfully!");

    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit();
  });