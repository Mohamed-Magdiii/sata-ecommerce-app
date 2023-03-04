const Users = require("../../models/Users");
const { dE } = require("../../shared/shared");
const notifCont = require("../Notifications/Notification");
const adminCont = require("../Admin/Admin");
const prodFindCont = require("../Products/find");

const updateNumberOfOrders = async (req, res) => {
  try {
    for (let i = 0; i < req.orderItems.length; i++) {
      const findUser = await Users.findOne({
        _id: req.orderItems[i].customer.toString(),
      });
      const updateUser = await Users.updateOne(
        { _id: req.orderItems[i].customer.toString() },
        {
          $push: { Orders: req.orderItems[i]._id.toString() },
          $set: { numberOfOrders: findUser.numberOfOrders + 1 },
        }
      );
    }
    res.status(200).json({ msg: "Updated Successfully" });
  } catch (error) {
    dE(res, error);
  }
};

// فى حاله لما المنتج يتضاف يروح يتضاف الاى دى فى جدول اليوزرات
const addNewProdId = async (req, res) => {
  try {
    const updateUser = await Users.findByIdAndUpdate(
      req.user.roles[0] === 2 ? req.user._id : req.body.vendor,
      {
        $push: { Products: req.newProduct._id },
      }
    );
    if (req.user.roles[0] === 2) {
      req.description = {
        en: `New Product has been Added by ${req.user.fullname}`,
        ar: `${req.user.fullname} قد تم اضافه منتج جديد بواسطه`,
      };
      req.reciever = req.user._id;
      req.notificationToAdmin = await notifCont.notify(req, res);
      adminCont.sendNotification(req, res);
    } else {
      prodFindCont.findById(req, res);
    }
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { updateNumberOfOrders, addNewProdId };
