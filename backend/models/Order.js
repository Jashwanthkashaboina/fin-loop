const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    qty: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    mode: {
        type: String,
        enum: ["BUY", "SELL"],
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);