const Products = require("../../models/Products");
const vend = require("../Vendor/Vendor");
const address = require("address");
const { dE } = require("../../shared/shared");
const ProductGallery = require("../../models/ProductGallery");

const getNews = async (req, res) => {
  await Products.find({})
    .populate("categoryId")
    .then((allProducts) => {
      const ids = [];
      allProducts.map(
        (p) =>
          (new Date() - p.createdAt) / (1000 * 60 * 60 * 24) < parseInt(15) &&
          ids.push(p)
      );
      res.status(200).json(ids);
    })
    .catch((error) => dE(res, error));
};

const filterBy = async (req, res) => {
  try {
    const result = await Products.find({
      categoryId: { $in: req.body.categoryIds },
    });
    res.status(200).json(result);
  } catch (error) {
    dE(res, error);
  }
};

const getProductByID = async (req, res) => {
  // I made it for mobile
  try {
    const productId = await Products.findOne({ _id: req.params.id })
      .populate("brand")
      .populate("subCategory")
      .populate("user", "fullname")
      .populate("categoryId");
    address.mac(async (err, MAC) => {
      if (err) {
        res.status(500).send("Error from server while getting max Address");
      } else {
        if (productId.visitedBy.indexOf(MAC) === -1) {
          const updateView = await Products.updateOne(
            { _id: req.params.id },
            { $push: { visitedBy: MAC } }
          );
        }
      }
    });
    const prodGal = await ProductGallery.find({ product: req.params.id });
    res.status(200).json({ product: productId, albums: prodGal });
  } catch (error) {
    dE(res, error);
  }
};

const getVendorProducts = async (req, res) => {
  try {
    const vendProd = await Products.find({
      user: req.user._id.toString(),
      isDeleted: false,
    })
      .populate("categoryId")
      .populate("brand")
      .populate("subCategory");
    res.status(200).json(vendProd);
  } catch (error) {
    dE(res, error);
  }
};

const update = async (req, res) => {
  try {
    const productData = await Products.findOne({
      _id: req.orderItem.product,
    });
    const updatedProductData = await Products.updateOne(
      { _id: req.orderItem.product },
      {
        $set: {
          bought: productData.bought + req.orderItem.quantity,
          store: productData.store - req.orderItem.quantity,
        },
      }
    );
    req.productInfo = productData;
    vend.update(req, res);
  } catch (error) {
    dE(res, error);
  }
};

const updateByDelivery = async (req, res) => {
  try {
    const productInfo = [];
    for (let i = 0; i < req.orderItems.length; i++) {
      const findProd = await Products.findOne({
        _id: req.orderItems[i].product.toString(),
      });
      const updateProd = await Products.updateOne(
        { _id: req.orderItems[i].product.toString() },
        {
          $set: {
            bought: findProd.bought + req.orderItems[i].quantity,
            store: findProd.store - req.orderItems[i].quantity,
          },
        }
      );
      productInfo.push(findProd);
    }
    req.productInfo = productInfo;
    vend.updateByDelivery(req, res);
  } catch (error) {
    dE(res, error);
  }
};

module.exports = {
  getNews,
  filterBy,
  getProductByID,
  getVendorProducts,
  update,
  updateByDelivery,
};
