const { dE } = require("../../shared/shared");
const vendDelCont = require("../Vendor/delete");

const deleteById = async (req, res) => {
  try {
    if (req.user.roles[0] === 2) {
      vendDelCont.delProdById(req, res);
    }
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { deleteById };
