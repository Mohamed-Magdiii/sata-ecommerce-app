const router = require("express").Router();
const { verifytoken } = require("../../middleware/auth");
const User = require("../../models/Users");
const Wishlist = require("../../models/WishList");
const Product = require("../../models/Products");

//Router api/wishlist
router.post("/", verifytoken, async (req, res) => {
  try {
    const isFavourite = await Wishlist.find({
      $and: [{ user: req.user._id }, { product: req.body.product }],
    });
    if (isFavourite.length > 0) {
     const wishlist =  await Wishlist.findOneAndDelete({
        $and: [{ user: req.user._id }, { product: req.body.product }],
      });
      return res.status(200).json(wishlist);
    }
    const wishlist = new Wishlist({
      user: req.user._id,
      product: req.body.product,
    });
    await wishlist.save();
    res.status(200).json(wishlist);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//@route    GET api/wishlist
//@desc     get all wishlist
//@acess    private
router.get("/", verifytoken, async (req, res) => {
  try {
    const favourites = await Wishlist.find({ user: req.user._id }).populate(
      "product"
    );
    res.status(200).json(favourites);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//@route    DELETE api/wishlist
//@desc     Delete Product from wishlist
//@acess    private
router.delete("/:id", verifytoken, async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    return res.status(200).json("This Product Is Removed From Favourites");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
