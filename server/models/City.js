const mongoose = require("mongoose");
const CitySchema = mongoose.Schema({
  city: {
    en: {
      type: String,
      required: true,
      unique: true,
    },
    ar: {
      type: String,
      required: true,
      unique: true,
    },
  },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Country"
  }

});

module.exports = mongoose.model("City", CitySchema);
