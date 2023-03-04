const ShippingCompany = require("../../models/ShippingCompany");
const findCompShipCont = require("./find");
const { dE } = require("../../shared/shared");

const updateById = async (req, res) => {
  try {
    const { name, email, mobile, status, telephone, address, logo } = req.body;
    console.log(req.body);
    console.log(req.file);
    const updComp = await ShippingCompany.findByIdAndUpdate(req.params.id, {
      $set: {
        name,
        email,
        mobile,
        status,
        telephone,
        address,
        logo: req.file ? req.file.path : logo,
      },
    });
    findCompShipCont.findById(req, res);
  } catch (error) {
    dE(res, req.t("DISPLAY.ERROR"));
  }
};

module.exports = { updateById };
