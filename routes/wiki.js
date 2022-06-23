const express = require("express");
const router = express.Router();
const { addPage } = require("../views/addPage");

router.get("/", (req, res, next) => {
  res.send("retrieve all wiki pages");
});
router.post("/", (req, res, next) => {
  res.send("submit new page to the database");
});
router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
