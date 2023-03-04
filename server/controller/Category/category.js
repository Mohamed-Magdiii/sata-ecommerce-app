const Categories = require("../../models/Categories");
const { dE } = require("../../shared/shared");

const addSubCategoryId = async (req, res) => {
  await Categories.updateOne(
    { _id: req.newSubCategory.category.toString() },
    { $push: { subCategories: req.newSubCategory._id.toString() } }
  )
    .then(() => {
      res.status(201).json({ msg: "New Sub Category has been Added !" });
    })
    .catch((error) => dE(res, error));
};

module.exports = { addSubCategoryId };
