const SubCategory = require("../../models/SubCategory");
const { dE, dSuc } = require("../../shared/shared");

const findById = async (req, res) => {
  try {
    const subCatId = await SubCategory.findById(req.params.id);
    dSuc(res, subCatId);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};
module.exports = { findById };
