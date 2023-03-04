const mongoose = require("mongoose");
const RatingSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    rate: {
      type: Number,
      default: 0,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
    comment: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Blocked", "Confirmed"],
      default: "Pending",
    },
    delivery: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Delivery",
    },
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
    },
    isApproved:{
      type:Boolean,
      default:false 
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Rate", RatingSchema);
