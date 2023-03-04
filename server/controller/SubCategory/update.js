const SubCategory = require("../../models/SubCategory");
const { dE } = require("../../shared/shared");
const findCont = require("./find");

const updateById = async (req, res) => {
  try {
    const { title_en, title_ar, category } = req.body;
    const updSubCat = await SubCategory.updateOne(
      { _id: req.params.id },
      { $set: { "title.en": title_en, "title.ar": title_ar, category } }
    );
    findCont.findById(req, res);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};
module.exports = { updateById };
