const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
  res.send("retrieve all wiki pages");
});
router.post("/", (req, res, next) => {
  res.send("submit new page to the database");
});
router.get("/add", (req, res, next) => {
  res.send("retrieve the add a page form");
});

module.exports = router;
