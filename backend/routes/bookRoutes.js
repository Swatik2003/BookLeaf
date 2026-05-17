const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getMyBooks,
  createBook
} = require("../controllers/bookController");

router.get(
  "/",
  authMiddleware,
  getMyBooks
);

router.post(
  "/",
  authMiddleware,
  createBook
);

module.exports = router;