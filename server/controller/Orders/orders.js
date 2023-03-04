const Orders = require("../../models/Orders");
const { dE } = require("../../shared/shared");

const addOrder = async (req, res, next) => {
  try {
    const {
      type,
      is_paid,
      price,
      shipping_cost,
      phone,
      address,
      longitude,
      latitude,
      fullname,
    } = req.body;
    const new_order = await new Orders({
      type,
      is_paid,
      price,
      shipping_cost,
      phone,
      address,
      longitude,
      latitude,
      fullname,
      color: req.body.color === null ? "" : req.body.color,
      size: req.body.size === null ? "" : req.body.size,
      customer: req.user._id,
    }).save();
    req.new_order = new_order;
    next();
  } catch (error) {
    dE(res, error);
  }
};

module.exports = { addOrder };
