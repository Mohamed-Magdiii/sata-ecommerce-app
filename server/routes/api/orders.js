const router = require("express").Router();
const Orders = require("../../models/Orders");
const OrderItems = require("../../models/OrderItem");
const {
  verifyTokenAndAdmin,
  verifytoken,
  verifyAdminOrVendor,
} = require("../../middleware/auth");
const User = require("../../models/Users");
const Notification = require("../../models/Notification");
const order2 = require("../../controller/Orders/orders2");
const order = require("../../controller/Orders/orders");
const orderItem = require("../../controller/Orders/orderItems");
const updateCont = require("../../controller/Orders/update");
const req_owner = require("../../controller/shared/req_owner");

router.post("/", verifytoken, order.addOrder, orderItem.addNew);

router.delete("/:id", verifytoken, (req, res) => {
  if (req.user.roles[0] === 1) {
    Orders.findOne({ _id: req.params.id })
      .then((orderData) => {
        User.updateOne(
          { _id: orderData.customer },
          { $pull: { Orders: req.params.id } }
        )
          .then(() => {
            Orders.deleteOne({ _id: req.params.id })
              .then(() => {
                OrderItems.deleteMany({ order: req.params.id })
                  .then(() => {
                    getAllOrders(req, res);
                  })
                  .catch((err) => {
                    res.status(500).json({
                      msg: "Error while deleting Order Items from server",
                      err,
                    });
                  });
              })
              .catch((error) => {
                res.status(500).json({ msg: "Error from server", error });
              });
          })
          .catch((error) =>
            res.status(500).json({ msg: "Error from server !!", error })
          );
      })
      .catch((error) =>
        res.status(500).json({ msg: "Error from server sdsad !!", error })
      );
  } else {
    User.findOne({ _id: req.user._id })
      .then((data) => {
        let flag = false;
        for (let i = 0; i < data.Orders.length; i++) {
          if (data.Orders[i].toString() === req.params.id) {
            flag = !flag;
            break;
          }
        }
        if (!flag) {
          res.status(404).json({ msg: "You are not allowed" });
        } else {
          User.updateOne(
            { _id: req.user._id },
            { $pull: { Orders: req.params.id } }
          )
            .then(() => {
              const new_notification = new Notification({
                description: `${req.user.fullname} deleted his order`,
                user: req.user._id,
              });
              new_notification
                .save()
                .then((notificationData) => {
                  User.updateMany(
                    { role: "admin" },
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
                      Orders.deleteOne({ _id: req.params.id })
                        .then(() => {
                          OrderItems.deleteMany({ order: req.params.id })
                            .then(() => {
                              getAllOrders(req, res);
                            })
                            .catch((err) => {
                              res.status(500).json({
                                msg: "Error while deleting Order Items from server",
                                err,
                              });
                            });
                        })
                        .catch((error) => {
                          res
                            .status(500)
                            .json({ msg: "Error from server", error });
                        });
                    })
                    .catch((error) =>
                      res
                        .status(500)
                        .json({ msg: "Error from server !!", error })
                    );
                })
                .catch((error) =>
                  res.status(500).json({ msg: "Error from server !!", error })
                );
            })
            .catch((error) =>
              res.status(500).json({ msg: "Error from server !!", error })
            );
        }
      })
      .catch((error) =>
        res.status(500).json({ msg: "Error from server !!", error })
      );
  }
});

router.get("/", verifytoken, order2.getAll);

router.get("/filterBy/:by", verifyTokenAndAdmin, (req, res) => {
  User.find({ fullname: new RegExp(req.params.by, "i") })
    .then((userData) => {
      if (userData.length > 0) {
        const userIds = [];
        for (let i = 0; i < userData.length; i++) {
          userIds.push(userData[i]._id);
        }
        Orders.find({ customer: { $in: userIds } })
          .populate("customer", "-password")
          .then((orderData) => {
            res.status(200).json(orderData);
          })
          .catch((error) =>
            res.status(500).json({ msg: "Error from server !!", error })
          );
      } else {
        Orders.find({ _id: req.params.by })
          .populate("customer", "-password")
          .then((orderData) => {
            res.status(200).json(orderData);
          })
          .catch((error) => {
            res.status(500).json({ msg: "Error from server !!", error });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ msg: "Errro from server !!", error });
    });
});

router.get("/filterByDate/:dateFrom/:dateTo", (req, res) => {
  const fromDate = new Date(req.params.dateFrom);
  const toDate = new Date(req.params.dateTo);
  Orders.find({ createdAt: { $lt: toDate, $gte: fromDate } })
    .populate("customer", "-password")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) =>
      res.status(500).json({ msg: "Error from server !!", error })
    );
});

const getAllOrders = (req, res) => {
  Orders.find()
    .populate("customer", "-password")
    .select("-__v")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ msg: "Error From Server", error });
    });
};

// بتجيب الاودرات بناء على النوع الحالى اللى هى فيه
router.get("/type/:type", verifyAdminOrVendor, req_owner.ordOwner);

// get All Orders maded by special customer ..
router.get("/findBy/:customerId", verifytoken, order2.getAllByCustomerId);

router.get("/:id", verifyTokenAndAdmin, (req, res) => {
  Orders.findOne({ _id: req.params.id })
    .populate("customer", "-password -__v")
    .select("-__v")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ msg: "Error From Server", error });
    });
});

router.put("/:id", verifyTokenAndAdmin, updateCont.updateById);

module.exports = router;
