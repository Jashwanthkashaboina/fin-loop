const Watchlist = require("../models/Watchlist");

module.exports.getWatchlist = async (req, res) => {
    try {
        // const userId = "685d1234567890abcdef5757";
        const userId = req.user.id;

        const watchlist = await Watchlist.find({ userId });

        // console.log(watchlist);
        console.log("Watchlist:", watchlist);


        return res.status(200).json(watchlist);

    } catch (err) {
        console.error("Error fetching watchlist:", err);

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};