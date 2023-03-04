const OrderItem = require("../../models/OrderItem");
const deliv = require("../Delivery/delivery");
const delivNotifCont = require("../Delivery/notification");
const { dE } = require("../../shared/shared");
const Users = require("../../models/Users");
const notification = require("../Notifications/Notification");
const admin = require("../Admin/Admin");
const vendor = require("../Vendor/Vendor");
const prod = require("../Products/product");

const findAll = async (req, res, next) => {
  try {
    if (req.user.roles[0] === 1) {
      // admin tries to find all Order Items
      const allOrderItems = await OrderItem.find();
      res.status(200).json(allOrderItems);
    } else if (req.user.roles[0] === 2) {
      // vendor tries to find his Order Items ;
      const vendorInfo = await Users.findOne({ _id: req.user._id });
      const specialOrderItems = await OrderItem.find({
        product: { $in: vendorInfo.Products },
      })
        .populate("customer")
        .populate("order")
        .populate("product");
      res.status(200).json(specialOrderItems);
    }
  } catch (error) {
    dE(res, error);
  }
};

const update = async (req, res, next) => {
  try {
    const vendor = await Users.findOne({ _id: req.user._id });
    const orderItem = await OrderItem.findOne({
      _id: req.params.id,
    });
    if (vendor.Products.indexOf(orderItem.product.toString()) === -1) {
      res.status(403).json({ msg: "You are not allowed " });
    } else {
      const updatedOrderItem = await OrderItem.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      if (req.body.status === "Deliverd" && orderItem.status !== "Deliverd") {
        req.isOrderDeliverdNow = true;
        req.orderItem = orderItem;
        deliv.update(req, res);
      } else if (req.body.delivery) {
        delivNotifCont.sendNotification(req, res, next);
      } else {
        res.status(200).json({ msg: "Successfully updated" });
      }
    }
  } catch (error) {
    dE(res, error);
  }
};

const orderItemDelivery = async (req, res) => {
  try {
    const orderItems = await OrderItem.find({
      delivery: req.params.id,
    })
      .populate("customer")
      .populate("product")
      .populate("order");
    res.status(200).json(orderItems);
  } catch (error) {
    dE(res, error);
  }
};

const addNew = async (req, res, next) => {
  try {
    for (let i = 0; i < req.body.orderItems.length; i++) {
      const newOrderItem = await new OrderItem({
        order: req.new_order._id.toString(),
        product: req.body.orderItems[i].product,
        quantity: req.body.orderItems[i].quantity,
        customer: req.user._id,
      }).save();
      req.quantity = req.body.orderItems[i].quantity;
      const v = await Users.findOne({
        Products: req.body.orderItems[i].product,
      });
      req.vend = v;
      vendor.sendNotification(req, res, next);
    }
    req.description = {
      en: `${req.user.fullname} made an order`,
      ar: `${req.user.fullname} قد تم اضافه طلب جديد بواسطه `,
    };
    const notificationToAdmin = await notification.notify(req, res);
    req.notificationToAdmin = notificationToAdmin;
    admin.sendNotification(req, res);
  } catch (error) {
    dE(res, error);
  }
};

const findByID = async (req, res) => {
  try {
    const orderItem = await OrderItem.findOne({ _id: req.params.id })
      .populate("order")
      .populate("customer")
      .populate("product");
    res.status(200).json(orderItem);
  } catch (error) {
    dE(res, error);
  }
};

const assignedOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.find({
      status:
        req.url !== "/done-orders" ? { $ne: "Deliverd" } : { $eq: "Deliverd" },
      delivery: req.deliveryBoy._id.toString(),
    })
      .populate("order")
      .populate("product")
      .populate("customer", "fullname");
    res.status(200).json(orderItems);
  } catch (error) {
    dE(res, error);
  }
};

// عشان لما ييجى يمسح يشوف كل الاوردر اتيمز اللى اتعملت ويتاكد ان كلها معمولها سوفت ديليت
const findByProdId = async (req, res) => {
  try {
    return await (
      await OrderItem.find({ product: req.params.id })
    ).filter((o) => o.isDeleted === false);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = {
  addNew,
  findAll,
  update,
  orderItemDelivery,
  findByID,
  assignedOrderItems,
  findByProdId,
};
