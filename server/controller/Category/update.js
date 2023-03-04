const Categories = require("../../models/Categories");
const { dE } = require("../../shared/shared");
const findCont = require("./find");

const updateById = async (req, res) => {
  try {
    const { image, title_en, title_ar, showInMenu, showInHomepage } = req.body;
    const updateCategory = await Categories.updateOne(
      { _id: req.params.id },
      {
        $set: {
          image: req.file ? req.file.path : image,
          "title.en": title_en,
          "title.ar": title_ar,
          showInMenu,
          showInHomepage,
        },
      }
    );
    findCont.findById(req, res);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { updateById };
