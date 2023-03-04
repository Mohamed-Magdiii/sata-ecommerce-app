const Country = require("../../models/Country");
const findCountryCont = require("./find");
const { dE } = require("../../shared/shared");

// لما مدينه جديده تتضاف يروح يضيف الاى دى بتاعها فى جدول البلاد
const addCityId = async (req, res) => {
  try {
    const newCity = await Country.findByIdAndUpdate(req.body.country, {
      $push: { city: req.newCity._id },
    });
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

const updateById = async (req, res) => {
  try {
    const { name_en, name_ar } = req.body;
    const updatedCountry = await Country.findByIdAndUpdate(req.params.id, {
      $set: {
        "name.en": name_en,
        "name.ar": name_ar,
      },
    });
    findCountryCont.findById(req, res);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { addCityId, updateById };
