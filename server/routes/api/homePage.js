const router = require("express").Router();
const { verifytoken } = require("../../middleware/auth");
const Categories = require("../../models/Categories");
const MobileSlider = require("../../models/MobileSlider");
const Products = require("../../models/Products");
const Category = require("../../models/Categories");
const Banner = require("../../models/Banner");
const Brand = require("../../models/Brand");
const { SearchByProductAndCategory, filterInProductModel } = require("../../controller/Filter/Filter");

//Router api/homePage
//HomePage Api
router.get("/", async (req, res) => {
  try {
    const limitCategories = await Categories.find({ showInHomepage: true })
      .sort({ date: -1 })
      .limit(3);
    const showInMenu = await Categories.find({ showInMenu: true })
      .populate("subCategories")
      .sort({
        title: 1,
      })
      .limit(8);
    const sliders = await MobileSlider.find({ isMobile: false });
    const banner = await Banner.find({ showInHome: true }).limit(2);
    const brands = await Brand.find().limit(6);
    res.status(200).json({
      homePage: { showInMenu, sliders, limitCategories, banner, brands },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});
//Route api/homePage
//HomePage To Get Products Of category
router.get("/:id", async (req, res) => {
  try {
    const productsOfCat = await Products.find({ categoryId: req.params.id });
    res.status(200).json(productsOfCat);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});
//@route    GET api/homePage/products/subcategory
//@desc     get all products from type subcategory
//@acess    private

router.get("/products/subcategory/:id", async (req, res) => {
  try {
    const productsOfSunCategory = await Products.find({
      subCategory: req.params.id,
    });
    res.status(200).json(productsOfSunCategory);
  } catch (error) {
    res.status(500).json("Server Error");
  }
});

//@route    GET api/homePage/products/subcategory
//@desc     get all products from type subcategory
//@acess    private

router.get("/products/subcategory/:id", async (req, res) => {
  try {
    const productsOfSunCategory = await Products.find({
      subCategory: req.params.id,
    });
    res.status(200).json(productsOfSunCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//@route    GET api/homePage/search
//@desc     search in product category subcategory
//@acess    private

// router.get("/search/home", async (req, res) => {
//   try {
//     console.log(req.query);
//     // let query = SearchByProductAndCategory(
//     //   req.query.category,
//     //   req.query.product
//     // );
//     // const products = await Products.find(query).populate("categoryId");
//     // res.status(200).json(products);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Server Error");
//   }
// });

router.get("/products/subcategory/:id", async (req, res) => {
  try {
    const productsOfSunCategory = await Products.find({
      subCategory: req.params.id,
    });
    res.status(200).json(productsOfSunCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//@route    GET api/homePage/search
//@desc     search in product category subcategory
//@acess    private

router.get("/search/home", async (req, res) => {
  try {
    let query = SearchByProductAndCategory(req.query);
    const products = await Products.find(query).populate("categoryId").populate("brand").populate("subCategory");
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});


// //function to Search
// const SearchByProductAndCategory = (queryCat, queryProd) => {
//   let query = {};
//   if (queryCat !== "" && queryProd == "") {
//     query.categoryId = queryCat;
//   } else if (queryCat == "" && queryProd !== "") {
//     query.$or = [
//       { title_en: { $regex: queryProd, $options: "i" } },
//       { description: { $regex: queryProd, $options: "i" } },
//     ];
//   } else if (queryCat !== "" && queryProd !== "") {
//     query.$and = [
//       { title_en: new RegExp(queryProd, "i") },
//       { categoryId: queryCat },
//     ];
//   }
//   return query;
// };

module.exports = router;
