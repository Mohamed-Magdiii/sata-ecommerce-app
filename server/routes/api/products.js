const router = require("express").Router();
const { verifytoken, verifyAdminOrVendor } = require("../../middleware/auth");
const User = require("../../models/Users");
const Products = require("../../models/Products");
const Category = require("../../models/Categories");
const SubCategory = require("../../models/SubCategory");
const Brands = require("../../models/Brand");
const { uploads } = require("../../shared/multer");
const Worker = require("../../models/Worker");
const Vendor = require("../../models/Vendor");
const p = require("../../controller/Products/product");
const prodAddCont = require("../../controller/Products/add");
const owner = require("../../controller/shared/req_owner");
const prodDelCont = require("../../controller/Products/delete");
const prodFindCont = require("../../controller/Products/find");
const prodUpdtCont = require("../../controller/Products/update");

router.post("/", verifytoken, uploads.array("image", 7), async (req, res) => {
  if (req.user.roles[0] === 2 || req.user.roles[0] === 1) {
    // admin or vendor
    prodAddCont.letAdminOrVendorAddProduct(req, res, true);
  } else {
    // check if he is a worker and he has permission to add product from his vendor
    checkWorker(req, res);
  }
});

// دى بتجيب اكتر منتج اتباع
router.get(
  "/most-bought-product",
  verifyAdminOrVendor,
  prodFindCont.mostBought
);

// اكتر منتج اتشاف
router.get(
  "/most-watched-product",
  verifyAdminOrVendor,
  prodFindCont.mostVisited
);

// دى اللى بتجيب كل المنتجات الخاصه ببائع معين
router.get("/vendorProducts", verifytoken, p.getVendorProducts);

const checkWorker = async (req, res) => {
  await Worker.findOne({ user: req.user._id })
    .populate("user")
    .then((workerData) => {
      if (workerData.canAdd) {
        Vendor.findOne({ _id: workerData.vendor })
          .then((vendorData) => {
            letAdminOrVendorAddProduct(req, res, vendorData.user);
          })
          .catch((error) =>
            res.status(500).json({ msg: "Error from server !!", error })
          );
      } else {
        res
          .status(403)
          .json({ msg: "You haven't any permission to add this product " });
      }
    })
    .catch((error) =>
      res.status(500).json({ msg: "Error from server !!", error })
    );
};

router.get("/filter-by-many-categories", p.filterBy);

router.put("/:id", verifytoken, uploads.array("image", 7), owner.detOwner);

// for mobile :)
router.put(
  "/img-prod-upd/:id",
  verifyAdminOrVendor,
  uploads.single("image"),
  prodUpdtCont.updGalImg
);

router.get("/mostWatched", async (req, res) => {
  await Products.find({ "visitedBy.2": { $exists: true } })
    .sort({ visitedBy: 1 })
    .limit(20)
    .populate("categoryId")
    .populate("subCategory")
    .populate("brand")
    .populate("user")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) =>
      res.status(500).json({ msg: "Error from server !!", error })
    );
});

router.get("/newProduct", p.getNews);

router.get("/getLowestQuantity", async (req, res) => {
  await Products.find()
    .populate("brand")
    .populate("categoryId")
    .populate("subCategory")
    .populate("user")
    .then((allProducts) => {
      let lowestProducts = [];
      allProducts.map((p) => p.store <= p.low && lowestProducts.push(p));
      res.status(200).json(lowestProducts);
    })
    .catch((error) =>
      res.status(500).json({ msg: "Error from server !!", error })
    );
});

router.get("/mostBought/:number", verifyAdminOrVendor, async (req, res) => {
  await Products.find({ bought: { $gte: req.params.number } })
    .populate("user")
    .populate("categoryId")
    .populate("brand")
    .populate("subCategory")
    .sort({ bought: -1 })
    .then((data) => res.status(200).json(data))
    .catch((error) =>
      res.status(500).json({ msg: "Error from server !!", error })
    );
});

//GET Product By ID
router.get("/:id", p.getProductByID);

router.get("/filterBy/:name", async (req, res) => {
  // filter By Category or sub Category
  if (isNaN(req.params.name)) {
    await Category.find({ title: new RegExp(req.params.name, "i") })
      .then(async (categoryData) => {
        await SubCategory.find({
          title: new RegExp(req.params.name, "i"),
        }).then(async (subCategoryData) => {
          await User.find({ fullname: new RegExp(req.params.name, "i") })
            .then(async (userData) => {
              Brands.find({ title: new RegExp(req.params.name, "i") })
                .then(async (brandsData) => {
                  const ids = [];
                  categoryData
                    .concat(subCategoryData)
                    .concat(userData)
                    .concat(brandsData)
                    .map((data) => {
                      ids.push(data._id);
                    });
                  await Products.find({
                    $or: [
                      { categoryId: { $in: ids } },
                      { subCategory: { $in: ids } },
                      { user: { $in: ids } },
                      { brand: { $in: ids } },
                    ],
                  })
                    .populate("categoryId")
                    .populate("subCategory")
                    .populate("brand")
                    .populate("user")
                    .then((data) => {
                      res.status(200).json(data);
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
              res.status(error).json({ msg: "Error from server !!", error })
            );
        });
      })
      .catch((error) =>
        res.status(500).json({ msg: "Error from server !!", error })
      );
  } else {
    await Products.find({
      $or: [{ price: req.params.name }, { store: req.params.name }],
    })
      .populate("categoryId")
      .populate("subCategory")
      .populate("brand")
      .populate("user")
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) =>
        res.status(500).json({ msg: "Error from server !!", error })
      );
  }
});

router.get("/filterByDate/:dateFrom/:dateTo", async (req, res) => {
  const fromDate = new Date(req.params.dateFrom);
  const toDate = new Date(req.params.dateTo);
  await Products.find({ createdAt: { $lt: toDate, $gte: fromDate } })
    .populate("categoryId")
    .populate("brand")
    .populate("subCategory")
    .populate("user")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) =>
      res.status(500).json({ msg: "Error from server !!", error })
    );
});

router.get("/", (req, res) => {
  getAllProducts(req, res);
});

const getAllProducts = async (req, res) => {
  await Products.find({ isDeleted: false })
    .populate("categoryId")
    .populate("brand")
    .populate("subCategory")
    .populate("user")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) =>
      res.status(500).json({ msg: "Error from server !!", error })
    );
};

router.get("/findBy/:name", verifytoken, async (req, res) => {
  try {
    const product = await Products.find({
      $or: [{ title_en: req.params.name }],
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.get("/filterHavingCategoryIdOrSubCategoryId/:id", async (req, res) => {
  await Products.find({
    $or: [
      { subCategory: req.params.id },
      { categoryId: req.params.id },
      { brand: req.params.id },
    ],
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) =>
      res.status(500).json({ msg: "Error from server !!", error })
    );
});

//Filter By Price In Product Model
router.get("/filterByPrice/:start/:end", async (req, res) => {
  try {
    const product = await Products.find({
      price: { $gte: req.params.start, $lte: req.params.end },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", verifyAdminOrVendor, prodDelCont.deleteById);

module.exports = router;
