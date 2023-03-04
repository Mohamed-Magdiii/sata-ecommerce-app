const router = require("express").Router();
const {
  verifyTokenAndAdmin,
  verifyAdminOrVendor,
} = require("../../middleware/auth");
const Vendor = require("../../models/Vendor");
const vend = require("../../controller/Vendor/Vendor");
const vendFindCont = require("../../controller/Vendor/find");
const adminFindCont = require("../../controller/Admin/find");

//Router api/Vendor
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateVendor = await Vendor.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateVendor);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//Router api/Vendor
router.get("/", verifyTokenAndAdmin, vend.getAll);

// بتجيب كل معلومات البائع فى جدول البائعين
router.get("/vend-info", verifyAdminOrVendor, vendFindCont.findvendInfo);

// بتجيب كل التقارير الخاصه بالبائع ده
router.get("/reports", verifyAdminOrVendor, vendFindCont.getVendReports);

// بتجيب كل التقارير لكل البائعين
router.get("/all-reports", verifyTokenAndAdmin, adminFindCont.findReports);

module.exports = router;
