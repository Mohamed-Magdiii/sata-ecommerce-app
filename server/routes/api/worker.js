const { verifyAdminOrVendor, verifytoken } = require("../../middleware/auth");
const router = require("express").Router();
const Worker = require("../../models/Worker");
const Vendor = require("../../models/Vendor");
const work = require("../../controller/Worker/worker");
const det_owner = require("../../controller/shared/req_owner");

router.get("/", verifyAdminOrVendor, async (req, res) => {
  if (req.user.roles[0] === 1) {
    await Worker.find()
      .populate("user")
      .populate({
        path: "vendor",
        populate: [{ path: "user" }],
      })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json({ msg: "Error from server !!", error });
      });
  } else {
    // vendor must know his workers only
    await Vendor.findOne({ user: req.user._id })
      .then(async (vendorData) => {
        if (vendorData !== null) {
          await Worker.find({ vendor: vendorData._id })
            .populate("user")
            .then((data) => {
              res.status(200).json(data);
            })
            .catch((error) =>
              res.status(500).json({ msg: "Error from server !!", error })
            );
        } else {
          res.status(200).json([]);
        }
      })
      .catch((error) =>
        res.status(500).json({ msg: "Error from server !!", error })
      );
  }
});

router.put("/:id", verifyAdminOrVendor, async (req, res) => {
  if (req.user.roles[0] === 2) {
    // vendor try to update worker info
    await Vendor.findOne({ user: req.user._id })
      .populate("user")
      .then(async (vendorData) => {
        await Worker.findOne({ vendor: vendorData._id, _id: req.params.id })
          .populate("user")
          .then(async (workerData) => {
            if (workerData === null) {
              res.status(403).json({ msg: "You are not allowed" });
            } else {
              await Worker.updateOne(
                { _id: workerData._id },
                { $set: req.body }
              )
                .then(() => {
                  res.status(200).json({ msg: "Updated Successfully" });
                })
                .catch((error) =>
                  res.status(500).json({ msg: "Error from server !!", error })
                );
            }
          });
      })
      .catch((error) =>
        res.status(500).json({ msg: "Error from server !!", error })
      );
  }
});

router.get("/:id", verifytoken, work.getWorkerById);

router.delete("/:id", verifyAdminOrVendor, det_owner.workerOwner);

module.exports = router;
