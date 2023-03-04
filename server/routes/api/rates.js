const router = require("express").Router();
const { verifytoken, verifyTokenAndAdmin } = require("../../middleware/auth");
const Rate = require("../../models/Rating");
const User = require("../../models/Users");
const Products = require("../../models/Products");
const r = require("../../controller/Rate/rate");

router.post("/", verifytoken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { product } = req.body;
    const checkProdUser = await Rate.find({
      $and: [{ product: product }, { user: req.user._id }],
    });
    if (checkProdUser.length) {
      const updatedRate = await Rate.findOneAndUpdate(
        { product: product },
        { $set: req.body },
        { new: true }
      );
      getAverage(product);
      return res.status(200).json(updatedRate);
    } else {
      const myProduct = await Products.findById(product);
      const rate = new Rate({
        user: user._id,
        product: product,
        rate: req.body.rate,
        isApproved: req.body.isApproved,
        comment: req.body.comment,
      });
      await rate.save();
      getAverage(product);
      res.status(200).json({ rate });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});
//@route    GET api/rates
//@desc     get all rate
//@acess    private
router.get("/", async (req, res) => {
  try {
    const rate = await Rate.find({isApproved:true}).populate({
      path: "product",
      populate: { path: "user" },
    }).populate("user");
    res.status(200).json(rate);
    } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});
router.post("/vendorAndDeleviry", verifytoken, r.addNew);

router.get("/vendorAndDelivery", r.getAll);

router.delete("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Rate.findByIdAndDelete();
    res.status(200).json({ msg: "The Rate Is Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const rate = await Rate.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(rate);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.get("/filterBy/:number", verifyTokenAndAdmin, async (req, res) => {
  try {
    const rate = await Rate.find({ rate: req.params.number }).populate({
      path: "product",
      populate: { path: "user" },
    });
    res.status(200).json(rate);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//@route    GET api/rates/:date
//@desc     filter rates by date
//@acess    private
router.get(
  "/filterByDate/:fromdate/:todate",
  verifyTokenAndAdmin,
  async (req, res) => {
    const fromDate = new Date(req.params.fromdate);
    const toDate = new Date(req.params.todate);
    try {
      const rate = await Rate.find({
        createdAt: { $lte: toDate, $gte: fromDate },
      });
      res.status(200).json(rate);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
);

//@route    DELETE api/rates/:id
//@desc     Delete rate by id
//@acess    private
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Rate.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Rate Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});
//@route    GET api/rates/:product_id
//@desc     get all rate
//@acess    private
router.get("/findRatesByProduct/:id", async (req, res) => {
  try {
    const rate = await Rate.find({$and : [{ product: req.params.id } , {isApproved:true}]})
      .populate({
        path: "product",
        populate: { path: "user" },
      })
      .populate("user");
    res.status(200).json(rate);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//Function to get average
const getAverage = async (product) => {
  const myRate = await Rate.find({ product });
  let sum = 0;
  for (let i = 0; i < myRate.length; i++) {
    sum += myRate[i].rate;
  }
  var avg = sum / myRate.length;
  await Products.findOneAndUpdate(
    product,
    { $set: { stars: avg } },
    { new: true }
  );
};

module.exports = router;
