const mongoose = require('mongoose');
const UserSchema = require('../Schemas/UserSchema');


const UserModel = mongoose.model("user",UserSchema);

module.exports={UserModel};