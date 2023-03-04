const router = require("express").Router();
const { verifytoken } = require("../../middleware/auth");
const Cart = require("../../models/Cart");
const Products = require("../../models/Products");

//@route    POST api/cart
//@desc     Add to Cart
//@acess    Private

router.post("/", verifytoken, async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    let product = await Products.findById({ _id: productId });
    if (cart) {
      // cart exists for user
      let itemIndex = cart.items.findIndex((p) => p.productId == productId);
      if (itemIndex > -1) {
        //product exists in the cart, update the quantity
        let productItem = cart.items[itemIndex];
        quantity == null
          ? (productItem.quantity += 1)
          : (productItem.quantity = quantity);
        cart.totalPrice = cart.totalPrice + product.price;
        cart.items[itemIndex] = productItem;
      } else {
        //product does not exists in cart, add new item
        cart.items.push({
          productId,
          quantity: 1,
          totalPrice: cart.totoalPrice + product.price,
        });
      }
      cart = await cart.save();

      return res.status(201).json({ "this is Cart ": cart });
    } else {
      //no cart for user, create new cart
      const newCart = await Cart.create({
        user: req.user._id,
        items: [{ productId, quantity: 1 }],
      });
      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

//@route    GET api/cart
//@desc     get to Cart
//@acess    private
router.get("/", verifytoken, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.productId",
      "-__v -bought"
    );
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//@route    DELETE api/cart
//@desc     delete cart Cart
//@acess    private
router.delete("/:id", verifytoken, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      let itemIndex = cart.items.findIndex((p) => p.productId == req.params.id);
      if (itemIndex > -1) {
        cart.items.splice(itemIndex, 1);
        const carts = await cart.save();
        res.json(cart);
      }
    } else {
      res.json({ msg: "This Product not found" });
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//@route    DELETE api/cart
//@desc     delete cart Cart
//@acess    private
router.delete("/deleteCart/me", verifytoken, async (req, res) => {
  try {
    const cart = await Cart.findOneAndDelete({ user: req.user._id });
    if (!cart) {
      res.status(200).json("This Cart Is Empty");
    } else {
      res.status(200).json("This Cart Is Deleted");
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
module.exports = router;
