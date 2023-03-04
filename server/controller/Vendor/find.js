const Vendor = require("../../models/Vendor");
const prodFindCont = require("../Products/find");
const { dE, dSuc } = require("../../shared/shared");

const findvendInfo = async (req, res) => {
  try {
    const workerObj = {
      path: "workers",
      populate: {
        path: "user",
        select: "fullname image",
      },
      select: "user _id ",
    };
    const userObj = {
      path: "user",
      populate: {
        path: "Products",
        select: "title _id image price",
      },
      select: "user",
    };
    const vendData = await Vendor.findOne({ user: req.user._id })
      .populate(userObj)
      .populate(workerObj);
    if (req.VendReports) {
      req.allReports = [{ vendData: vendData }];
      prodFindCont.mostVisited(req, res);
    } else {
      dSuc(res, vendData);
    }
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

const getVendReports = async (req, res) => {
  try {
    req.VendReports = true;
    findvendInfo(req, res);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

const findAll = async (req, res) => {
  try {
    if (req.adminReport) {
      req.allAdminReports.push({
        vendorReports: await Vendor.find()
          .populate("user", "fullname")
          .select("-workers -taxcard_front -taxcard_back -commercialRecord"),
      });
      prodFindCont.mostVisited(req, res);
    }
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { findvendInfo, getVendReports, findAll };
