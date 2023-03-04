const Users = require("../../models/Users");
const { dE, dNotPermit } = require("../../shared/shared");
const prodUpdCont = require("../Products/update");

// اتاكد الاول ان المنتج بتاعه وبعدين اخليه يعمل تعديل
const updateProduct = async (req, res) => {
  try {
    const userInfo = await Users.findOne({ Products: req.params.id });
    if (
      userInfo === null ||
      req.user._id.toString() !== userInfo._id.toString()
    ) {
      dNotPermit(res, req.t("NOT.PERMITTED"));
    } else {
      prodUpdCont.updateById(req, res);
    }
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { updateProduct };
