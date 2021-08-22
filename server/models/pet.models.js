const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [3, "Name must be at least 3 characters long"],
  },
  type: {
    type: String,
    required: [true, "Pet Type is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  skill1: {
    type: String,
    required: false,
  },
  skill2: {
    type: String,
    required: false,
  },
  skill3: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("Pet", PetSchema);
