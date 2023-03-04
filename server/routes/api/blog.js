const router = require("express").Router();
const { verifyTokenAndAdmin } = require("../../middleware/auth");
const Blog = require("../../models/Blog");
const User = require("../../models/Users");
const { uploads } = require("../../shared/multer");

//@route    POST api/blog
//@desc     Add blog
//@acess    Private
router.post(
  "/",
  verifyTokenAndAdmin,
  uploads.single("image"),
  async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      const blog = new Blog({
        "title.en": req.body.title_en,
        "title.ar": req.body.title_ar,
        "description.en": req.body.description_en,
        "description.ar": req.body.description_ar,
        user: user._id,
        image: req.file && req.file.path,
      });
      await blog.save();
      res.status(200).json(blog);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
);

//@route    GET api/blogs
//@desc     get all blogs
//@acess    public

router.get("/", async (req, res) => {
  try {
    const blog = await Blog.find()
      .populate("user", ["fullname", "email"])
      .sort({ date: -1 });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

//@route    GET api/blogs/:blog_id
//@desc     get blog by id
//@acess    Private
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("user", [
      "fullname",
      "email",
    ]);
    console.log(blog);
    if (!blog) {
      res.status(400).json({ msg: "This blog not found" });
    }
    res.status(200).json(blog);
  } catch (err) {
    console.log(err);
    if (err.kind === "ObjectId") {
      res.status(400).json({ msg: "This blog not found" });
    }
    res.status(500).send("Server Error");
  }
});
//@route    Delet api/blog/:id
//@desc     Delete blog by id
//@acess    Private
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(500).json({ msg: "blog Not Found" });
    }
    //check user
    if (blog.user.toString() !== req.user._id) {
      return res.status(400).json({ msg: "user not authorized" });
    }
    await blog.remove();
    res.json({ msg: "Blog Removed " });
  } catch (err) {
    if (err.kind === ObjectId) {
      res.status(400).json({ msg: "This blog not found" });
    }
    res.status(500).send("Server Error");
  }
});
//@route    PUT api/blogs/:blog_id
//@desc     update blog by id
//@acess    Private
router.put("/:id", verifyTokenAndAdmin,uploads.single("image"), async (req, res) => {
  try {
    const myBlog = await Blog.findById(req.params.id)
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
        "title.en": req.body.title_en,
        "title.ar": req.body.title_ar,
        "description.en": req.body.description_en,
        "description.ar": req.body.description_ar,
        image: req.file === undefined ? myBlog.image : req.file.path,
        },
      },
      { new: true }
    );
    res.status(200).json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
