const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

const {
  createTicket,
  getMyTickets,
  getAllTickets,
  updateTicketStatus
} = require("../controllers/ticketController");

router.post("/", authMiddleware, createTicket);

router.get("/my", authMiddleware, getMyTickets);

router.get(
  "/all",
  authMiddleware,
  roleMiddleware("admin"),
  getAllTickets
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateTicketStatus
);

module.exports = router;