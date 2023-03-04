const router = require("express").Router();
const Category = require("../../models/Categories");
const { uploads } = require("../../shared/multer");
const { verifyTokenAndAdmin } = require("../../middleware/auth");
const updateCont = require("../../controller/Category/update");

//Router api/categories
router.post(
  "/",
  verifyTokenAndAdmin,
  uploads.single("image"),
  async (req, res) => {
    const { showInMenu, showInHomepage } = req.body;
    try {
      console.log(req.file);
      const category = new Category({
        "title.en": req.body.title_en,
        "title.ar": req.body.title_ar,
        showInMenu,
        showInHomepage,
        image: req.file ? req.file.path : "",
      });
      console.log(category);
      await category.save();
      res.status(201).json(category);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

router.put(
  "/:id",
  verifyTokenAndAdmin,
  uploads.single("image"),
  updateCont.updateById
);

router.get("/", async (req, res) => {
  try {
    const category = await Category.find()
      .populate("subCategories")
      .sort({ title: 1 });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Category Deleted" });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
