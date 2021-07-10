const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone:{ type: Number,}
});

module.exports = mongoose.model ("user", UserSchema) 