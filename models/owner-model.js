const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    picture: {
      type: String,
      default: "",
    },

    gstin: {
      type: String,
      required: true,
      unique: true,
    },

    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    ],
  },
  { timestamps: true }
);

const Owner = mongoose.model("owner", ownerSchema);

module.exports = Owner;