const City = require("../../models/City");
const findCityCont = require("./find");
const updateCountryCont = require("../Country/update");
const { dE } = require("../../shared/shared");

const addNew = async (req, res) => {
  try {
    const { name_en, name_ar, country } = req.body;
    const newCity = await new City({
      "name.en": name_en,
      "name.ar": name_ar,
      country,
    }).save();
    req.newCity = newCity;
    updateCountryCont.addCityId(req, res);
    findCityCont.findById(req, res);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { addNew };
