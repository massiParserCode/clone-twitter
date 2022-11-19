const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserShcema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "/images/profilePic.jpg ",
    },
  },
  {
    timestamps: true,
  }
);

let User = mongoose.model("User", UserShcema);

module.exports = User;
