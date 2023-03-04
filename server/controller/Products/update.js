const Products = require("../../models/Products");
const prodFindCont = require("./find");
const ProductGallery = require("../../models/ProductGallery");
const { dE, dSuc } = require("../../shared/shared");

const updateById = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);
    const color = req.body.color
      .toString()
      .split(",")
      .map((col) => col.trim());
    const size = req.body.size
      .toString()
      .split(",")
      .map((col) => col.trim());
    req.imgIndx = 0;
    const updProdId = await Products.updateOne(
      { _id: req.params.id },
      {
        $set: {
          "title.en": req.body.title_en,
          "title.ar": req.body.title_ar,
          image:
            req.files.length > 0
              ? req.body.imgId[0] === "undefined"
                ? req.files[req.imgIndx++].path
                : req.body.image
              : req.body.image,
          low: req.body.low,
          price: req.body.price,
          status: req.body.status,
          categoryId: req.body.categoryId,
          subCategory: req.body.subCategory,
          "description.en": req.body.description_en,
          "description.ar": req.body.description_ar,
          brand: req.body.brand,
          color,
          size,
          store: req.body.store,
          sale: req.body.sale,
          onsale: req.body.onsale,
          isApproved: req.body.isApproved,
          user: req.user.roles[0] === 2 ? req.user._id : req.body.vendor,
        },
      }
    );
    if (req.files.length > 0) {
      updateProdGal(req, res);
    }
    prodFindCont.findById(req, res);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

const updateProdGal = async (req, res) => {
  try {
    if (Array.isArray(req.body.imgId)) {
      for (let i = 1; i < req.body.imgId.length; i++) {
        if (req.body.imgId[i] === "undefined") {
          await new ProductGallery({
            product: req.params.id,
            image: req.files[req.imgIndx++].path,
          }).save();
        }
      }
    }
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

// for mobile
const updGalImg = async (req, res) => {
  try {
    const prodImgId = await Products.findById(req.params.id);
    if (req.body.new === "true") {
      const newProdGal = await new ProductGallery({
        image: req.file.path,
        product: req.params.id,
      }).save();
    } else {
      if (prodImgId === null) {
        console.log("line 86");
        const progGallery = await ProductGallery.findById(req.params.id);
        console.log(progGallery);
        console.log(req.file);
        const prodGalUpdImgId = await ProductGallery.findByIdAndUpdate(
          req.params.id,
          {
            $set: {
              image: req.file.path,
            },
          }
        );
      } else {
        const prodUpdImgId = await Products.findByIdAndUpdate(req.params.id, {
          $set: {
            image: req.file.path,
          },
        });
      }
    }
    dSuc(res, req.t("DISPLAY.SUCCESS"));
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { updateById, updateProdGal, updGalImg };
