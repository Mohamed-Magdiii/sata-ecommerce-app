const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyparser = require("body-parser");
const i18next = require("i18next");
const Backend = require("i18next-fs-backend");
const middleware = require("i18next-http-middleware");
i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: "en",
    backend: {
      loadPath: "./locales/{{lng}}/translation.json",
    },
  });
const app = express();
app.use(middleware.handle(i18next));
//Connect To MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("API Running");
});

//Use Middleware
app.use(express.json({ extended: false }));
app.use(cors());
app.use("/public", express.static("./public"));
app.use(bodyparser.json());

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/categories", require("./routes/api/categories"));
app.use("/api/subcategories", require("./routes/api/subcategory"));
app.use("/api/products", require("./routes/api/products"));
app.use("/api/country", require("./routes/api/country"));
app.use("/api/city", require("./routes/api/city"));
app.use("/api/blog", require("./routes/api/blog"));
app.use("/api/orders", require("./routes/api/orders"));
app.use("/api/order-item", require("./routes/api/orderItem"));
app.use("/api/offers", require("./routes/api/offers"));
app.use("/api/brands", require("./routes/api/brands"));
app.use("/api/blogs", require("./routes/api/blog"));
app.use("/api/notifications", require("./routes/api/notifications"));
app.use("/api/rates", require("./routes/api/rates"));
app.use("/api/region", require("./routes/api/region"));
app.use("/api/conversations", require("./routes/api/conversation"));
app.use("/api/messages", require("./routes/api/messages"));
app.use("/api/banner", require("./routes/api/banner"));
app.use("/api/worker", require("./routes/api/worker"));
app.use("/api/mobile-slider", require("./routes/api/mobileSlider"));
app.use("/api/settings", require("./routes/api/settings"));
app.use("/api/vendors", require("./routes/api/vendor"));
app.use("/api/coupons", require("./routes/api/coupons"));
app.use("/api/homePage", require("./routes/api/homePage"));
app.use("/api/cart", require("./routes/api/cart"));
app.use("/api/wishlist", require("./routes/api/wishList"));
app.use("/api/shipping-company", require("./routes/api/shippingcompany"));
app.use("/api/delivery", require("./routes/api/delivery"));
app.use("/api/contact", require("./routes/api/contact"));
app.use("/api/returned-products", require("./routes/api/returned-products"));
app.use("/api/shippingAddress", require("./routes/api/ShippingAddress"));
app.use("/api/homeApk", require("./routes/home"));

//App listen on Port 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server Run on Port ${PORT}`);
});
