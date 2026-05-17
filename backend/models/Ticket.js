const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  },

  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book"
  },

  subject: String,

  description: String,

  category: {
    type: String,
    default: "General"
  },

  priority: {
    type: String,
    default: "Medium"
  },

  status: {
    type: String,
    default: "Open"
  },

  messages: [
    {
      sender: String,
      text: String,
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Ticket", ticketSchema);