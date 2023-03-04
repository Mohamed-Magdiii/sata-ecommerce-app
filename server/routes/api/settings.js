const router = require("express").Router();
const { verifyTokenAndAdmin } = require("../../middleware/auth");
const Settings = require("../../models/Settings");
const { uploads } = require("../../shared/multer");
const {siteData} = require("../../controller/Settings/shared")
//Router api/settings
router.put(
  "/:id",
  [
    verifyTokenAndAdmin,
    uploads.fields([{ name: "logo" }, { name: "favIcon" }]),
  ],
  async (req, res) => {
    try {
      const site = await Settings.findById({ _id: req.params.id });
      const siteSettData = siteData(req,site)
      const updateSettings = await Settings.findOneAndUpdate(
        { _id: req.params.id },
        { $set: siteSettData },
        { new: true }
      );
      res.status(200).json(updateSettings);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
);

//Router api/settings
router.post(
  "/",
  [
    verifyTokenAndAdmin,
    uploads.fields([
      { name: "logo", maxCount: 1 },
      { name: "favIcon", maxCount: 1 },
    ]),
  ],
  async (req, res) => {
    const site = siteData(req)
    console.log(site);
    try {
      const setting = new Settings(site );
      await setting.save();
      res.status(200).json(setting);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
);

//Router api/settings
router.get("/:id", async (req, res) => {
  try {
    const setting = await Settings.findById(req.params.id);
    res.status(200).json(setting);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
