const Country = require("../../models/Country");
const { dE, dSuc } = require("../../shared/shared");
const deleteCityCont = require("../City/delete");

const deleteById = async (req, res) => {
  try {
    deleteCityCont.delCityRelated(req, res);
    const delCnt = await Country.findByIdAndDelete(req.params.id);
    dSuc(res, req.t("DELETED.SUCCESS"));
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { deleteById };
