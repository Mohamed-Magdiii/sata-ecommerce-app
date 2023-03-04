const Products = require("../../models/Products");
const { dE, dSuc } = require("../../shared/shared");

const findById = async (req, res) => {
  try {
    const prodId = await Products.findById(
      req.newProduct ? req.newProduct._id.toString() : req.params.id
    )
      .populate("categoryId")
      .populate("brand")
      .populate("subCategory")
      .populate("user");
    dSuc(res, prodId);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

// دى بتجيب اكتر منتج اتباع
const mostBought = async (req, res) => {
  try {
    const mostBt = await Products.find(
      req.user.roles[0] === 2 ? { user: req.user._id } : {}
    )
      .sort({ bought: -1 })
      .limit(1)
      .select("price bought title image");
    if (req.VendReports) {
      req.allReports.push({ mostBought: mostBt[0] });
      dSuc(res, req.allReports);
    } else if (req.adminReport) {
      req.allAdminReports.push({ mostBought: mostBt[0] });
      dSuc(res, req.allAdminReports);
    } else {
      dSuc(res, mostBt[0]);
    }
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

// اكتر منتج اتشاف
const mostVisited = async (req, res) => {
  try {
    const mostBt = await Products.find(
      req.user.roles[0] === 2 ? { user: req.user._id } : {}
    )
      .sort({ "visitedBy.length": -1 })
      .select("visitedBy title image");
    let result = mostBt[0];
    for (let i = 1; i < mostBt.length; i++) {
      if (mostBt[i].visitedBy.length > result.visitedBy.length) {
        result = mostBt[i];
      }
    }
    if (req.VendReports) {
      req.allReports.push({ mostVisited: result });
      mostBought(req, res);
    } else if (req.adminReport) {
      req.allAdminReports.push({ mostVisited: result });
      mostBought(req, res);
    } else {
      dSuc(res, result);
    }
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { findById, mostBought, mostVisited };
