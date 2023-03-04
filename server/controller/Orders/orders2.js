const Orders = require("../../models/Orders");
const orderItem = require("../Orders/orderItems");
const { dE } = require("../../shared/shared");
const OrderItems = require("../../models/OrderItem");

const getAll = async (req, res) => {
  try {
    if (req.user.roles[0] === 1) {
      const allOrders = await Orders.find().populate("customer");
      res.status(200).json(allOrders);
    } else {
      orderItem.findAll(req, res);
    }
  } catch (error) {
    dE(res, error);
  }
};

const getAllByCustomerId = async (req, res) => {
  try {
    if (req.user.roles[0] === 1) {
      const filtOrd = await Orders.find({ customer: req.params.customerId });
      res.status(200).json(filtOrd);
    } else {
      const filtOrd = await Orders.find({
        customer: req.user._id,
      }).populate("customer", "fullname");
      const result = [];
      const final = [];
      for (let i = 0; i < filtOrd.length; i++) {
        const filtOrdItems = await OrderItems.find({
          order: filtOrd[i]._id.toString(),
        }).populate("product", "image title price");
        if (filtOrdItems !== []) {
          final.push({ Order: filtOrd[i], orderItems: filtOrdItems });
        }
      }
      res.status(200).json(final);
    }
  } catch (error) {
    dE(res, error);
  }
};

module.exports = { getAll, getAllByCustomerId };
