const mongoose = require('mongoose');
const { Schema } = mongoose;

const positionSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean.apply,
});

const Position = mongoose.model('Position', positionSchema);
module.exports = Position;