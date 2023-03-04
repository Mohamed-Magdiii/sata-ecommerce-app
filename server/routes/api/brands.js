const router = require("express").Router();
const { verifyTokenAndAdmin } = require("../../middleware/auth");
const Brand = require("../../models/Brand");
const { uploads } = require("../../shared/multer");
const b = require("../../controller/Brand/brand");
const brandFindCont = require("../../controller/Brand/find");
const brandUpdtCont = require("../../controller/Brand/update");
const { dE } = require("../../shared/shared");

router.post(
  "/",
  verifyTokenAndAdmin,
  uploads.single("image"),
  b.addNew,
  b.getAll
);

router.get("/", b.getAll);

router.get("/category/:id", async (req, res) => {
  await Brand.find({ category: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => dE(res, e));
});

router.get("/:id", brandFindCont.findById);

router.delete("/:id", verifyTokenAndAdmin, (req, res) => {
  Brand.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ msg: "deleted successfully " });
    })
    .catch((e) => dE(res, e));
});

router.put(
  "/:id",
  verifyTokenAndAdmin,
  uploads.single("image"),
  brandUpdtCont.updateById
);

module.exports = router;
