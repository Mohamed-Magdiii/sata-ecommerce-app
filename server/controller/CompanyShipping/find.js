const ShippingCompany = require("../../models/ShippingCompany");
const { dE, dSuc } = require("../../shared/shared");

const findAll = async (req, res) => {
  try {
    const companies = await ShippingCompany.find().select(
      "name email status telephone"
    );
    dSuc(res, companies);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

const findById = async (req, res) => {
  try {
    const companyData = await ShippingCompany.findById(req.params.id).select(
      "name email status telephone logo mobile address "
    );
    dSuc(res, companyData);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { findAll, findById };
