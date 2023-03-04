const Products = require("../../models/Products");
const ProductGallery = require("../../models/ProductGallery");
const userUpdCont = require("../Users/update");
const { dE } = require("../../shared/shared");

const letAdminOrVendorAddProduct = async (req, res, productOwner) => {
  try {
    const color = req.body.color
      .toString()
      .split(",")
      .map((col) => col.trim());
    const size = req.body.size
      .toString()
      .split(",")
      .map((col) => col.trim());
    console.log(req.files);
    const new_product = await new Products({
      "title.en": req.body.title_en,
      "title.ar": req.body.title_ar,
      "description.en": req.body.description_en,
      "description.ar": req.body.description_ar,
      price: req.body.price,
      store: req.body.store,
      sale: req.body.sale ? req.body.sale : 0,
      size,
      color,
      onsale: req.body.onsale,
      categoryId: req.body.categoryId,
      status: req.user.roles[0] === 1 ? true : false,
      subCategory: req.body.subCategory,
      brand: req.body.brand,
      low: req.body.low ? req.body.low : 1,
      image: req.files[0].path,
      isDeleted: false,
      isApproved: productOwner === true ? true : false,
      user:
        productOwner === true
          ? req.user.roles[0] === 1
            ? req.body.vendor
            : req.user._id
          : productOwner,
    }).save();
    req.newProduct = new_product;
    addProductGallery(req, res);
    userUpdCont.addNewProdId(req, res);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

const addProductGallery = async (req, res) => {
  try {
    for (let i = 1; i < req.files.length; i++) {
      await new ProductGallery({
        product: req.newProduct._id,
        image: req.files[i].path,
      }).save();
    }
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { letAdminOrVendorAddProduct, addProductGallery };
