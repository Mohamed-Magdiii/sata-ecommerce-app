const router = require("express").Router();
const { verifyTokenAndAdmin } = require("../../middleware/auth");
const { uploads } = require("../../shared/multer");
const Slider = require("../../models/MobileSlider");

router.post(
  "/",
  verifyTokenAndAdmin,
  uploads.single("image"),
  async (req, res) => {
    const new_mobile_slider = new Slider({
      "title.en": req.body.title_en,
      "title.ar": req.body.title_ar,
      image: req.file.path,
      isActive: req.body.isActive,
      isMobile: req.body.isMobile,
    });
    await new_mobile_slider
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
  await Slider.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) =>
      res.status(500).json({ msg: "Error from server !!", error })
    );
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Slider.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Slider Deleted Successfully" });
  } catch (error) {}
});

router.put(
  "/:id",
  [verifyTokenAndAdmin, uploads.single("image")],
  async (req, res) => {
    const { isMobile, title, isActive } = req.body;
    const updates = {
      isMobile,
      isActive,
      title,
    };
    try {
      if (req.file) {
        const image = req.file.path;
        updates.image = image;
      }
      const updateSlider = await Slider.findOneAndUpdate(
        req.params.id,
        { $set: updates },
        { new: true }
      );
      res.status(200).json({ msg: "Slider Updated Successfuly", updateSlider });
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
