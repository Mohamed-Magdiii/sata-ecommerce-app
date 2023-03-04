const Rating = require("../../models/Rating");
const Users = require("../../models/Users");
const { dE } = require("../../shared/shared");
const deliv = require("../Delivery/delivery");
const vend = require("../Vendor/Vendor");

const getAll = async (_req, res) => {
  await Rating.find()
    .populate("user")
    .populate({
      path: "product",
      populate: [{ path: "user" }],
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => dE(res, e));
};

const addNew = async (req, res, next) => {
  try {
    const { user, rate, product, comment, delivery, vendor } = req.body;
    const foundUser = await Users.findOne({ _id: req.user._id });
    if (delivery && foundUser.rating.indexOf(delivery) !== -1) {
      res.status(403).send("You rated this Delivery Before");
    } else if (product && foundUser.rating.indexOf(product) !== -1) {
      res.status(403).send("You rated this Product Before");
    } else if (vendor && foundUser.rating.indexOf(vendor) !== -1) {
      res.status(403).send("You rated this Vendor Before");
    } else {
      const new_rate = await new Rating({
        user,
        rate,
        product,
        comment,
        delivery,
        vendor,
      }).save();
      const pushId = await Users.updateOne(
        { _id: req.user._id },
        {
          $push: {
            rating: delivery ? delivery : product ? product : vendor && vendor,
          },
        }
      );
      req.message = `${req.user.fullname} gived you ${rate} rate`;
      if (delivery) {
        deliv.sendNotification(req, res, next);
      } else if (vendor) {
        vend.sendNotification(req, res, next);
      } else {
        res.status(200).json({ msg: "Not Yet !!" });
      }
    }
  } catch (error) {
    dE(res, error);
  }
};

// const getAverage = async (product) => {
//   const myRate = await Rate.find({ product });
//   let sum = 0;
//   for (let i = 0; i < myRate.length; i++) {
//     sum += myRate[i].rate;
//   }
//   var avg = sum / myRate.length;
//   await Products.findOneAndUpdate(
//     product,
//     { $set: { stars: avg } },
//     { new: true }
//   );
// };

module.exports = { getAll, addNew };
