const Brand = require("../../models/Brand");
const { dE, dSuc } = require("../../shared/shared");

const findById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id).populate(
      "category",
      "title"
    );
    dSuc(res, brand);
  } catch (error) {
    dE;
  }
};

module.exports = { findById };
