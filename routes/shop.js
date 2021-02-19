const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../util/path");

// use() allows to add middleware functions
// takes in requestHandlers
router.get("/", (req, res, next) => {
  // path provides an absolute path depending on the OS
  // path.join also joins for us so we don't need the /
  // HOWEVER, __dirname provides an absolute path to routes so to go UP one, we need "../"
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
