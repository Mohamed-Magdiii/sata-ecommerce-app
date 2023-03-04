const router = require("express").Router();
const { verify_company } = require("../../middleware/companyAuth");
const {
  verifyTokenAndAdmin,
  verifytoken,
  verifyAdminOrVendor,
} = require("../../middleware/auth");
const { dE } = require("../../shared/shared");
const Delivery = require("../../models/Delivery");
const Users = require("../../models/Users");
const Notification = require("../../models/Notification");
const deliv = require("../../controller/Delivery/delivery");

router.get("/getAll", verify_company, async (req, res) => {
  await Delivery.find({ company: req.company._id })
    .populate("company", "-password")
    .sort({ numberOfDeliverdOrders: -1 })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => dE(res, e));
});

router.get("/", verifyAdminOrVendor, async (req, res) => {
  if (req.user.roles[0] === 2) {
    await Delivery.find({ status: "Confirmed", inOrder: false })
      .populate("company")
      .populate("user")
      .sort({ "rate.value": -1, numberOfDeliverdOrders: -1 })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((e) => dE(res, e));
  } else {
    await Delivery.find()
      .populate("company")
      .populate("user")
      .sort({ "rate.value": -1, numberOfDeliverdOrders: -1 })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((e) => dE(res, e));
  }
});

router.get("/new-deliveries/:days", verifyTokenAndAdmin, async (req, res) => {
  await Delivery.find()
    .populate("user")
    .populate("company")
    .then((data) => {
      const ids = [];
      data.map(
        (u) =>
          (new Date() - u.createdAt) / (1000 * 60 * 60 * 24) <
            parseInt(req.params.days) && ids.push(u)
      );
      res.status(200).json(ids);
    })
    .catch((e) => dE(res, e));
});

router.put("/update-delivery/:id", verify_company, async (req, res) => {
  await Delivery.findOne({ _id: req.params.id })
    .then(async (deliveryData) => {
      if (deliveryData.company.toString() !== req.company._id) {
        res.status(403).json({ msg: "This Delivery isn't belongs to you " });
      } else {
        await Delivery.updateOne({ _id: req.params.id }, { $set: req.body })
          .then(async () => {
            const new_notification = new Notification({
              description: "You Are Accepted and can deliver orders",
              user: req.company._id,
            });
            new_notification
              .save()
              .then(async (notificationData) => {
                await Users.updateOne(
                  { _id: deliveryData.user },
                  {
                    $push: {
                      Notifications: {
                        $each: [notificationData._id],
                        $position: 0,
                      },
                    },
                  }
                )
                  .then(() => {
                    res.status(200).json({ msg: "Updated Successfully" });
                  })
                  .catch((e) => dE(res, e));
              })
              .catch((e) => dE(res, e));
          })
          .catch((e) => dE(res, e));
      }
    })
    .catch((e) => dE(res, e));
});

// الاوردرات اللى هو سلمها
router.get("/done-orders", verifytoken, deliv.assignedOrders);

// الاوردرات اللى عليه بس متسلمتش
router.get("/orders-assigned-not-done", verifytoken, deliv.assignedOrders);

router.post("/change-in-order-state", verifytoken, deliv.changeOnlineState);

router.get("/current-state", verifytoken, deliv.getCurrentState);

// دى كل ميتغير مكانه يتسجل فى الداتا بيز اللوكيشن الجديد بتاعه
router.post("/change-location", verifytoken, deliv.changeLocation);

// دى لما الديلفرى بيتعمله assign لاوردر واحد او اكتر فيوافق انه يوصلهم فيتغير حالتهم من confirmed -> onDelivery
router.post("/update-order-items", verifytoken, deliv.updateOrderItems);

module.exports = router;
