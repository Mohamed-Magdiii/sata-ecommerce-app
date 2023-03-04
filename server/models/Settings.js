const mongoose = require("mongoose");
const SettingSchema = mongoose.Schema(
  {
    mobile: {
      type: Number,
    },
    address: {
      en: {
        type: String,
      },
      ar: {
        type: String,
      },
    },
    logo: {
      type: String,
      default: "",
    },
    favIcon: {
      type: String,
      default: "",
    },
    title: {
      en: {
        type: String,
      },
      ar: {
        type: String,
      },
    },
    description: {
      en: {
        type: String,
      },
      ar: {
        type: String,
      },
    },
    meta_title: {
      en: {
        type: String,
      },
      ar: {
        type: String,
      },
    },
    worktime: {
      type: String,
    },
    map: {
      type: String,
    },
    about_title: {
      en:{
        type:String
      },
      ar:{
        type:String
      },
    },
    about_description: {
      en:{
        type:String
      },
      ar:{
        type:String
      },
    },
    term_conditons:{
      en:{
        type:String
      },
      ar:{
        type:String
      },
    },
    privacy_policy:{
      en:{
        type:String
      },
      ar:{
        type:String
      },
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Setting", SettingSchema);
