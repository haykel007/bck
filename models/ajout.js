const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ajoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description :{
    type: String,
    required: true,
  },
  price: { type: String, required: true },
  phone:{ type: String,}
});

module.exports = mongoose.model ("ajout", ajoutSchema) 