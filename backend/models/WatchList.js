const mongoose = require("mongoose");
const { Schema } = mongoose;

const watchlistSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    name: String,

    price: Number,

    percent: String,

    isDown: Boolean,
});

module.exports = mongoose.model("Watchlist", watchlistSchema);