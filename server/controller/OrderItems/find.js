const moment = require("moment");
const OrderItem = require("../../models/OrderItem");
const { dE, dSuc } = require("../../shared/shared");

const findAllByDays = async (req, res) => {
  try {
    const ordItm = await OrderItem.find()
      .select("product quantity status createdAt")
      .populate("product", "price title");
    const result = [];
    ordItm.map((o) => {
      let a = moment(new Date(o.createdAt), "D/M/YYYY");
      let b = moment(new Date(), "D/M/YYYY");
      if (moment(b).diff(a, "days") <= req.params.days) result.push(o);
    });
    dSuc(res, result);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { findAllByDays };
