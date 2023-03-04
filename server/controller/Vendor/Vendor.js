const Users = require("../../models/Users");
const userUpdateController = require("../Users/update");
const Vendor = require("../../models/Vendor");
const { dE } = require("../../shared/shared");
const sharedNotification = require("../Rate/sharedNotification");
const notification = require("../Notifications/Notification");
const Worker = require("../../models/Worker");

const getAll = async (req, res) => {
  try {
    const allVendors = await Vendor.find()
      .populate("user")
      .sort({ Net: -1, numberOfDeliverdOrders: -1 });
    res.status(200).json(allVendors);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

const sendNotification = async (req, res, next) => {
  try {
    if (req.body.vendor) {
      const find = await Vendor.findOne({ _id: req.body.vendor });
      req.find = find;
      sharedNotification.sharedNotification(req, res, next);
    } else {
      req.description = {
        en: `${req.user.fullname} bought ${req.quantity} of your product`,
        ar: `قد اشترى ${req.user.fullname} منتج جديد`,
      };
      req.reciever = req.vend._id;
      const new_notification = await notification.notify(req, res);
      const updateVendor = await Users.updateOne(
        { _id: req.vend._id },
        {
          $push: {
            Notifications: {
              $each: [new_notification._id],
              $position: 0,
            },
          },
        }
      );
    }
  } catch (error) {
    dE(res, error);
  }
};

const findOnlineWorkers = async (req, res) => {
  try {
    const vendorTable = await Vendor.findOne({ user: req.user._id });
    const workerVendor = await Worker.find({ vendor: vendorTable._id });
    const userId = workerVendor.map((w) => w.user.toString());
    const onlineWorkers = await Users.find({
      online: true,
      _id: { $in: userId },
    });
    res.status(200).json(onlineWorkers);
  } catch (error) {
    dE(res, error);
  }
};

const findByRole = async (req, res) => {
  try {
    const vendorTable = await Vendor.findOne({ user: req.user._id });
    const workerVendor = await Worker.find({ vendor: vendorTable._id });
    const userId = workerVendor.map((w) => w.user.toString());
    const allWorkers = await Users.find({
      _id: { $in: userId },
    });
    res.status(200).json(allWorkers);
  } catch (error) {
    dE(res, error);
  }
};

const update = async (req, res) => {
  try {
    const vendorData = await Users.findOne({
      Products: req.orderItem.product,
    });
    const findVendorTable = await Vendor.findOne({ user: vendorData._id });
    const updateVendorTable = await Vendor.updateOne(
      { user: vendorData._id },
      {
        $set: {
          numberOfDeliverdOrders: findVendorTable.numberOfDeliverdOrders + 1,
          Net:
            findVendorTable.Net +
            req.productInfo.price * req.orderItem.quantity,
        },
      }
    );
    res.status(200).json({ msg: "Success operation" });
  } catch (error) {
    dE(res, error);
  }
};

const updateByDelivery = async (req, res) => {
  try {
    for (let i = 0; i < req.orderItems.length; i++) {
      const productOwner = await Users.findOne({
        Products: req.orderItems[i].product.toString(),
      });
      const vendorTable = await Vendor.findOne({
        user: productOwner._id.toString(),
      });
      const updateVendorTable = await Vendor.updateOne(
        {
          user: productOwner._id.toString(),
        },
        {
          $set: {
            numberOfDeliverdOrders: vendorTable.numberOfDeliverdOrders + 1,
            Net:
              vendorTable.Net +
              req.productInfo[i].price * req.orderItems[i].quantity,
          },
        }
      );
    }
    userUpdateController.updateNumberOfOrders(req, res);
  } catch (error) {
    dE(res, error);
  }
};

module.exports = {
  getAll,
  sendNotification,
  findOnlineWorkers,
  findByRole,
  update,
  updateByDelivery,
};
