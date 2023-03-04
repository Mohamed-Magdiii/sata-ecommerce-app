const Users = require("../../models/Users");
const Vendor = require("../../models/Vendor");
const Worker = require("../../models/Worker");
const notification = require("../Notifications/Notification");
const vendSendNotif = require("../Vendor/sendNotification");
const { dE, dSuc } = require("../../shared/shared");

const deleteById = async (req, res) => {
  try {
    const workerData = await Worker.findByIdAndUpdate(req.params.id, {
      $set: { isDeleted: true },
    });
    if (req.isAdmin) {
      const vend = await Vendor.findOne({ workers: req.params.id });
      const vendUser = await Users.findById(vend.user.toString());
      req.description = {
        en: "Admin Deleted Your Worker",
        ar: "قد تم حظر العامل الخاص بك بواسطه الادمن",
      };
      req.reciever = vendUser._id;
      req.notificationToVendor = await notification.notify(req, res);
      vendSendNotif.sendNotification(req, res);
    }
    dSuc(res, req.t("DELETED.SUCCESS"));
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { deleteById };
