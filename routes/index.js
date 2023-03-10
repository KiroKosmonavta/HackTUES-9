var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/service", function (req, res, next) {
  res.render("service", { title: "Service" });
});
router.get("/joinUs", function (req, res, next) {
  res.render("joinUs", { title: "Join Us" });
});
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login" });
});
router.get("/aboutUs", function (req, res, next) {
  res.render("aboutUs", { title: "About Us" });
});
module.exports = router;
