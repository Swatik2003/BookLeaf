const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

dotenv.config();

const app = express();

// Middleware

app.use(cors());

app.use(express.json());

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/tickets", ticketRoutes);

// Test Route

app.get("/", (req, res) => {

  res.send("BookLeaf Backend Running 🚀");

});

// MongoDB Connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) =>
    console.error("MongoDB Error:", err)
  );

// IMPORTANT FOR VERCEL

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {

  app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

  });

}

// EXPORT APP

module.exports = app;