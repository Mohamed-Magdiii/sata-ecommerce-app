const Users = require("../../models/Users");
const Products = require("../../models/Products");
const { dE, dNotPermit, dSuc } = require("../../shared/shared");

const delProdById = async (req, res) => {
  try {
    const userInfo = await Users.findOne({ Products: req.params.id });
    if (
      userInfo === null ||
      userInfo._id.toString() !== req.user._id.toString()
    ) {
      dNotPermit(res, req.t("NOT.PERMITTED"));
    } else {
      const softDelProd = await Products.findByIdAndUpdate(req.params.id, {
        $set: { isDeleted: true },
      });
      dSuc(res, req.t("DELETED.SUCCESS"));
    }
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { delProdById };
