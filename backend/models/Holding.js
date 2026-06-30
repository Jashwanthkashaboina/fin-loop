const mongoose = require('mongoose');
const { Schema } = mongoose;

const holdingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

const Holding = mongoose.model('Holding', holdingSchema);
module.exports = Holding;