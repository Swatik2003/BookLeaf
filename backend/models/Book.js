const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  isbn: String,
  genre: String,
  status: String,
  copiesSold: Number,

  royalty: {
    earned: Number,
    paid: Number,
    pending: Number
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  }
});

module.exports = mongoose.model("Book", bookSchema);