const {
  verifytoken,
  verifyAuthorization,
  verifyTokenAndAdmin,
} = require("../../middleware/auth");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/Users");
const { uploads } = require("../../shared/multer");
const user = require("../../controller/Users/users");
const moment = require("moment");
const Users = require("../../models/Users");
const { dE } = require("../../shared/shared");

router.put("/:id", verifytoken, uploads.single("image"), async (req, res) => {
  if (req.user.roles[0] === 1) {
    // admin try to update user !!
    await User.updateOne({ _id: req.params.id }, [
      { $set: { image: req.file ? req.file.path : req.body.image } },
      { $set: req.body },
    ])
      .then((data) => res.status(200).json(data))
      .catch((error) =>
        res.status(500).json({ msg: "Errro from server !!", error })
      );
  } else {
    // دى بتاعت لما ميستخدمش الكمبيوتر يتعمل اوفلاين ولما يرجع يعمل اونلاين تانى
    await Users.updateOne({ _id: req.params.id }, [
      { $set: { image: req.file ? req.file.path : req.body.image } },
      { $set: req.body },
    ])
      .then(() => res.status(200).json({ msg: "Updated Successfully" }))
      .catch((error) => dE(res, error));
  }
});

router.put("/password/:id", verifyAuthorization, async (req, res) => {
  const { currentpassword, newpassword } = req.body;
  await User.findOne({ _id: req.params.id })
    .then(async (data) => {
      await bcrypt
        .compare(currentpassword, data.password)
        .then((isCompared) => {
          if (isCompared) {
            bcrypt.hash(newpassword, 10, (err, hash) => {
              User.updateOne(
                { _id: req.params.id },
                { $set: { password: hash } }
              )
                .then(() => {
                  res
                    .status(200)
                    .json({ msg: "Password Updated Successfully " });
                })
                .catch((error) => {
                  res.status(500).json({ msg: "Error from server !!", error });
                });
            });
          } else {
            res.status(400).json({ msg: "Password isn't valid" });
          }
        })
        .catch((error) => {
          console.log("NotUpdated Server Before last");
          res.status(500).json({ error, msg: "Error from server !!" });
        });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/online/:role", verifytoken, user.findOnlineUsers);

// بتاعت استعراض العملاء الاكثر طلبا
router.get("/most-orderd/:number", user.getMostOrderd);

router.get("/new-users/:days/:role", verifyTokenAndAdmin, async (req, res) => {
  await User.find({ role: req.params.role })
    .then((data) => {
      const ids = [];
      data.map(
        (u) =>
          (new Date() - u.createdAt) / (1000 * 60 * 60 * 24) <
            parseInt(req.params.days) && ids.push(u)
      );
      res.status(200).json(ids);
    })
    .catch((error) =>
      res.status(500).json({ msg: "Error from server !!", error })
    );
});

router.get(
  "/not-signed-in/:days/:role",
  verifyTokenAndAdmin,
  async (req, res) => {
    await User.find({ $and: [{ online: false }, { role: req.params.role }] })
      .then((data) => {
        const ids = [];
        data.map(
          (u) =>
            !(
              moment(new Date(), "D/M/YYYY").diff(moment(u.loggedAt), "days") <
              parseInt(req.params.days)
            ) && ids.push(u)
        );
        res.status(200).json(ids);
      })
      .catch((error) =>
        res.status(500).json({ msg: "Error from server !!", error })
      );
  }
);

router.get("/blocked/:role", verifyTokenAndAdmin, async (req, res) => {
  User.find({ $and: [{ status: "Blocked" }, { role: req.params.role }] })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ msg: "Error from Server !!", error });
    });
});

router.get("/findByRole/:role", verifytoken, user.findByRole);

router.delete("/:id", verifyAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("User deleted Successfuly");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.find()
      .populate("Notifications")
      .populate("Orders")
      .sort({ createdAt: -1 });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.get("/me", verifytoken, async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
router.get("/getUserById/:id", verifytoken, (req, res) => {
  User.findOne({ _id: req.params.id })
    .select("-password")
    .populate("Notifications")
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      res.status(500).json({ msg: "Error from server !!", error });
    });
});

router.get("/findBy/:name", verifyTokenAndAdmin, (req, res) => {
  User.find({
    $or: [{ email: req.params.name }, { fullname: req.params.name }],
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) =>
      res.status(500).json({ error, msg: "Error from server !!" })
    );
});

router.put(
  "/profile/me",
  [verifytoken, uploads.single("image")],
  async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      const updatedUser = await User.findByIdAndUpdate(
        req.user._id,
        [
          { $set: req.body },
          {
            $set: {
              image: req.file !== undefined ? req.file.path : user.image,
            },
          },
        ],
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
