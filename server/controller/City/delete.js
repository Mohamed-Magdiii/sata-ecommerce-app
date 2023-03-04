const { dE } = require("../../shared/shared");
const City = require("../../models/City");

// دى بتمسح كل المدن اللى البلد بتاعتها محتاجه تتمسح
const delCityRelated = async (req, res) => {
  try {
    const delCities = await City.deleteMany({ country: req.params.id });
  } catch (error) {
    dE;
  }
};

module.exports = { delCityRelated };
