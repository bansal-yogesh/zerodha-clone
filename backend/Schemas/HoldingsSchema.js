
const mongoose = require('mongoose');
const HoldingsSchema = mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports={HoldingsSchema};