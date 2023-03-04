const Country = require("../../models/Country");
const findCityCont = require("./find");
const { dE } = require("../../shared/shared");

const addNew = async (req, res) => {
  try {
    const { name_en, name_ar } = req.body;
    const new_country = new Country({
      "name.en": name_en,
      "name.ar": name_ar,
    });
    req.newCountry = await new_country.save();
    findCityCont.findById(req, res);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { addNew };
