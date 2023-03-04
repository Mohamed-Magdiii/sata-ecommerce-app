const { dE, dSuc } = require("../../shared/shared");
const vendFindCont = require("../Vendor/find");

const findReports = async (req, res) => {
  try {
    req.adminReport = true;
    req.allAdminReports = [];
    vendFindCont.findAll(req, res);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { findReports };
