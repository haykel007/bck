const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const chefSchema = new mongoose.Schema({
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
  phone:{ type: String,}
});

module.exports = mongoose.model ("chef", chefSchema) 