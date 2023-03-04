const router = require("express").Router();
const OrderItem = require("../../models/OrderItem");
const Products = require("../../models/Products");
const {
  verifyTokenAndAdmin,
  verifytoken,
  verifyAdminOrVendor,
} = require("../../middleware/auth");
const Users = require("../../models/Users");
const Notification = require("../../models/Notification");
const orderItem = require("../../controller/Orders/orderItems");
const det_own = require("../../controller/shared/req_owner");

router.post("/", verifytoken, (req, res) => {
  const { order, product, quantity } = req.body;
  const order_item = new OrderItem({
    order,
    product,
    quantity,
    customer: req.user._id,
  });
  order_item
    .save()
    .then((newOrderItem) => {
      Users.findOne({ Products: product })
        .then(() => {
          const new_notification = new Notification({
            description: `You have new Order from ${req.user.fullname}`,
            user: req.user._id,
          });
          new_notification
            .save()
            .then((notificationData) => {
              Users.updateOne(
                { Products: product },
                { $push: { Notifications: notificationData._id } }
              )
                .then(() => {
                  res.status(201).json({
                    msg: "New Order Item have been created",
                    newOrderItem,
                  });
                })
                .catch((error) =>
                  res.status(500).json({ msg: "Error from server !!", error })
                );
            })
            .catch((error) =>
              res.status(500).json({ msg: "Error from server !!", error })
            );
        })
        .catch((error) =>
          res.status(500).json({ msg: "Error from server !!", error })
        );
    })
    .catch((error) => {
      res.status(500).json({ err: "Error from Server", error });
    });
});

router.get("/", verifytoken, orderItem.findAll);

/*get Order Item By Order */
router.get("/order/:id", verifyTokenAndAdmin, (req, res) => {
  OrderItem.find({ order: req.params.id })
    .populate({
      path: "order",
      populate: {
        path: "customer",
        model: "User",
      },
    })
    .populate("product")
    .populate({
      path: "delivery",
      populate: {
        path: "user",
        model: "User",
      },
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ msg: "Error from server", error });
    });
});

router.get(
  "/getOrderItemRelatedToVendor",
  verifyAdminOrVendor,
  async (req, res) => {
    await Products.find({ user: req.user._id })
      .then(async (productData) => {
        const productIds = [];
        productData.map((p) => productIds.push(p._id));
        await OrderItem.find({ product: { $in: productIds } })
          .then((data) => {
            res.status(200).json(data);
          })
          .catch((error) =>
            res.status(500).json({ msg: "Error from server !!", error })
          );
      })
      .catch((error) =>
        res.status(500).json({ msg: "Error from server !!", error })
      );
  }
);

// هنا بنديله الاى دى بتاع الجدول بتاع الديلفرى
router.get(
  "/OrderItemHavingDeliveryId/:id",
  verifyTokenAndAdmin,
  orderItem.orderItemDelivery
);

router.get("/getOrderItems/me", verifytoken, async (req, res) => {
  try {
    const order = await OrderItem.find({ customer: req.user._id })
      .populate("product")
      .populate("order");
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(200).send("Server Error");
  }
});

router.get("/:id", verifytoken, orderItem.findByID);

router.get("/last/:days/days", verifyAdminOrVendor, det_own.ordItemOwner);

router.put("/:id", verifytoken, orderItem.update);

module.exports = router;
