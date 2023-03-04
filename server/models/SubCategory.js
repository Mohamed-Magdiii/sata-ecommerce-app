const mongoose = require("mongoose");

const SubCategorySchema = mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    title: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubCategory", SubCategorySchema);
