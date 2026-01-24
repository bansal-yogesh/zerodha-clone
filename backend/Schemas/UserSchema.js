const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose").default;


const UserSchema = new mongoose.Schema(
  {
    userMobile: { type: String, required: true, unique: true }, // login id
    email: { type: String, required: true, unique: true },
    name: { type: String },

    // Personal info
    fullName: { type: String },
    dob: { type: Date },
    address: { type: String },

    // Trading account info
    // accountNumber: { type: String, unique: true },
    // accountType: {
    //   type: String,
    //   enum: ["demat", "trading"],
    //   default: "trading",
    // },

    balance: { type: Number, default: 5000 }, // account balance
    fundsDeposited: { type: Number, default: 0 },


    // References to other collections
    holdings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Holdings" }],
    positions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Positions" }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Orders" }],

    // Timestamps
  },
  { timestamps: true },
);


UserSchema.plugin(passportLocalMongoose, {
  usernameField: "userMobile",
  usernameUnique: false,
});

module.exports = UserSchema;
