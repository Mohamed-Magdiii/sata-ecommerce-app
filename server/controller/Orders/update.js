const Orders = require("../../models/Orders");
const { dE } = require("../../shared/shared");
const findCont = require("./find");

const updateById = async (req, res) => {
  try {
    const updateOrder = await Orders.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    findCont.findById(req, res);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { updateById };
