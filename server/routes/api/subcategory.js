const router = require("express").Router();
const SubCategory = require("../../models/SubCategory");
const { verifyTokenAndAdmin } = require("../../middleware/auth");
const sub = require("../../controller/SubCategory/subCategory");
const cat = require("../../controller/Category/category");
const updateCont = require("../../controller/SubCategory/update");

router.post("/", verifyTokenAndAdmin, sub.addNew, cat.addSubCategoryId);

router.get("/", (req, res) => {
  getAllSubCategories(req, res);
});

router.get("/:id", (req, res) => {
  SubCategory.findOne({ _id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ msg: "Error from server", err });
    });
});

router.put("/:id", verifyTokenAndAdmin, updateCont.updateById);

router.delete("/:id", verifyTokenAndAdmin, (req, res) => {
  SubCategory.deleteOne({ _id: req.params.id })
    .then(() => {
      getAllSubCategories(req, res);
    })
    .catch((err) => {
      res.status(500).json({ msg: "Error from server", err });
    });
});

router.get("/category/:id", async (req, res) => {
  await SubCategory.find({ category: req.params.id })
    .populate("category", "-__v")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ error, msg: "Error from server " });
    });
});

const getAllSubCategories = (req, res) => {
  SubCategory.find()
    .populate("category", "-__v")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ msg: "Error from server", err });
    });
};

module.exports = router;
