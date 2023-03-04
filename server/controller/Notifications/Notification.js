const Notification = require("../../models/Notification");
const Users = require("../../models/Users");
const { dE } = require("../../shared/shared");

const addNew = async (req, res) => {
  try {
    const { description_en, description_ar, users, user } = req.body;
    const new_notification = new Notification({
      "description.en": description_en,
      "description.ar": description_ar,
      users,
      user,
    });
    const notificationData = await new_notification.save();
    if (users.length > 0) {
      const updateUsers = await Users.updateMany(
        { _id: { $in: users } },
        {
          $push: {
            Notifications: {
              $each: [notificationData._id],
              $position: 0,
            },
          },
        }
      );
    }
    res.status(201).json({ msg: "Notification has been sent !" });
  } catch (error) {
    dE(res, error);
  }
};

const notify = async (req, res) => {
  try {
    const new_notification = new Notification({
      description: req.description,
      user: req.reciever,
    });
    const notificationData = await new_notification.save();
    return notificationData;
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

// for mobile
const getUserNotification = async (req, res) => {
  try {
    const notifications = await Users.findOne({ _id: req.user._id })
      .populate("Notifications")
      .select("Notifications");
    res.status(200).json(notifications);
  } catch (error) {
    dE(res, error);
  }
};

module.exports = { addNew, notify, getUserNotification };
