const mongoose = require('mongoose');
const {HoldingsSchema} = require('../Schemas/HoldingsSchema');


const HoldingsModel = mongoose.model("holding",HoldingsSchema);

module.exports={HoldingsModel};