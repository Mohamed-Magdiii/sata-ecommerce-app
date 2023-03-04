const Users = require("../../models/Users");
const admin = require("../Admin/Admin");
const { dE } = require("../../shared/shared");
const vend = require("../Vendor/Vendor");
const deliv = require("../Delivery/delivery");

// بتاعت استعراض العملاء الاكثر طلبا
const getMostOrderd = async (req, res) => {
  try {
    const users = await Users.find({
      numberOfOrders: { $gte: req.params.number },
    });
    res.status(200).json(users);
  } catch (error) {
    dE(res, error);
  }
};

const findOnlineUsers = async (req, res) => {
  if (req.user.roles[0] === 1) {
    admin.findOnlineUsers(req, res);
  } else {
    if (req.params.role === "worker") {
      vend.findOnlineWorkers(req, res);
    }
  }
};

const findByRole = async (req, res) => {
  if (req.user.roles[0] === 1) {
    admin.findByRole(req, res);
  } else {
    if (req.params.role === "worker") vend.findByRole(req, res);
    else if (req.params.role === "delivery") deliv.findByRole(req, res);
    else res.status(403).send("Not Permitted !");
  }
};

module.exports = {
  getMostOrderd,
  findOnlineUsers,
  findByRole,
};
