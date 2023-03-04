const Orders = require("../../models/Orders");
const { dE, dSuc } = require("../../shared/shared");

const findById = async (req, res) => {
  try {
    const orderId = await Orders.findById(req.params.id).populate(
      "customer",
      "fullname"
    );
    dSuc(res, orderId);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

// ببعت النوع اذا كان تحت الطلب او تم الموافقه عليه اوغيره
const findByType = async (req, res) => {
  try {
    const ordType = await Orders.find({ type: req.params.type })
      .select("customer createdAt address is_paid type")
      .populate("customer", "fullname");
    dSuc(res, ordType);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { findById, findByType };
