const Ticket = require("../models/Ticket");

exports.createTicket = async (req, res) => {

  try {

    const ticket = await Ticket.create({
      author: req.user.id,
      book: req.body.book,
      subject: req.body.subject,
      description: req.body.description
    });

    res.status(201).json(ticket);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.getMyTickets = async (req, res) => {

  try {

    const tickets = await Ticket.find({
      author: req.user.id
    })
    .populate("book");

    res.json(tickets);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.getAllTickets = async (req, res) => {

  try {

    const tickets = await Ticket.find()
    .populate("author")
    .populate("book");

    res.json(tickets);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.updateTicketStatus = async (req, res) => {

  try {

    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status
      },
      {
        new: true
      }
    );

    res.json(ticket);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};