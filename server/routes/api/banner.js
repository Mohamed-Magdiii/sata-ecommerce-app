const router = require("express").Router();
const { verifyTokenAndAdmin } = require("../../middleware/auth");
const Banner = require("../../models/Banner");
const { uploads } = require("../../shared/multer");
router.post(
  "/",
  verifyTokenAndAdmin,
  uploads.single("image"),
  async (req, res) => {
    const new_banner = new Banner({
      "title.en": req.body.title_en,
      "title.ar": req.body.title_ar,
      image: req.file.path,
      isActive: req.body.isActive,
      showInHome: req.body.showInHome,
    });
    await new_banner
      .save()
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) =>
        res.status(500).json({ msg: "Error from server !!", error })
      );
  }
);

router.get("/", async (req, res) => {
  await Banner.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) =>
      res.status(500).json({ msg: "Error from server !!", error })
    );
});

module.exports = router;
