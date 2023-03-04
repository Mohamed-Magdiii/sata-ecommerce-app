const Categories = require("../../models/Categories");
const { dE, dSuc } = require("../../shared/shared");

const findById = async (req, res) => {
  try {
    const catId = await Categories.findById(req.params.id).select(
      "-subCategories"
    );
    dSuc(res, catId);
  } catch (error) {
    dE(res, req.t("DISPLAY.SUCCESS"));
  }
};

module.exports = { findById };
