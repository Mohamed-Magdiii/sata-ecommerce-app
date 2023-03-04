const Users = require("../../models/Users");
const prodFindCont = require("../Products/find");
const { dE } = require("../../shared/shared");

const sendNotification = async (req, res) => {
  try {
    const admins = await Users.updateMany(
      { role: "admin" },
      {
        $push: {
          Notifications: {
            $each: [req.notificationToAdmin._id],
            $position: 0,
          },
        },
      }
    );
    if (req.newProduct) {
      prodFindCont.findById(req, res);
    } else {
      res.status(200).json({ msg: "Success Operation" });
    }
  } catch (error) {
    dE(res, error);
  }
};

const findOnlineUsers = async (req, res) => {
  try {
    const onlineUsers = await Users.find({
      $and: [{ online: true }, { role: req.params.role }],
    });
    res.status(200).json(onlineUsers);
  } catch (error) {
    dE(res, error);
  }
};

const findByRole = async (req, res) => {
  try {
    const role = await Users.find({ role: req.params.role });
    res.status(200).json(role);
  } catch (error) {
    dE(res, error);
  }
};

module.exports = { sendNotification, findOnlineUsers, findByRole };
