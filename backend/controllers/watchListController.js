const WatchList = require("../models/WatchList");

module.exports.getWatchlist = async (req, res) => {
    try {
        const watchlist = await WatchList.find({ });

        return res.status(200).json(watchlist);

    } catch (err) {
        console.error("Error fetching watchlist:", err);

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};