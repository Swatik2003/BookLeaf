const Book = require("../models/Book");

exports.getMyBooks = async (req, res) => {

  try {

    const books = await Book.find({
      author: req.user.id
    });

    res.json(books);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
exports.createBook = async (req, res) => {

  try {

    const book = await Book.create({

      title: req.body.title,

      isbn: req.body.isbn,

      genre: req.body.genre,

      status: req.body.status,

      copiesSold: req.body.copiesSold,

      royalty: {
        earned: req.body.earned,
        paid: req.body.paid,
        pending: req.body.pending
      },

      author: req.user.id

    });

    res.status(201).json(book);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};