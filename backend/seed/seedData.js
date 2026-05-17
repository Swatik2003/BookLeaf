const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Author = require("../models/Author");
const Book = require("../models/Book");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seed = async () => {

  await Author.deleteMany();
  await Book.deleteMany();

  const author = await Author.create({
    name: "Rahul",
    email: "rahul@test.com",
    password: "123456",
    role: "author"
  });

  await Book.create({
    title: "Atomic Habits",
    isbn: "123456",
    genre: "Self Help",
    status: "Published",

    copiesSold: 1000,

    royalty: {
      earned: 5000,
      paid: 3000,
      pending: 2000
    },

    author: author._id
  });

  console.log("Seeded");

  process.exit();

};

seed();