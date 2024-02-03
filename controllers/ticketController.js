const { default: mongoose } = require("mongoose");
const Ticket = require("../models/TicketModel");

const createTicket = async (req, res) => {
  const {
    issueType,
    platform,
    description,
    userName,
    createdBy,
    subject,
    assignedTo,
  } = req.body;
  try {
    const ticket = await Ticket.create({
      issueType,
      platform,
      description,
      userName,
      createdBy,
      subject,
      assignedTo,
    });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({}).sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

const getTicketByID = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Ticket" });
  }

  try {
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      return res.status(404).json({ error: "No such Ticket" });
    }

    res.status(200).json(Ticket);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const deleteTicket = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Ticket" });
  }

  try {
    const ticket = await Ticket.findOneAndDelete({ _id: id });
    if (!ticket) {
      return res.status(404).json({ error: "No such Ticket" });
    }

    res.status(200).json("Deleted Succesfully");
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const updateTicket = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Ticket" });
  }

  try {
    const ticket = await Ticket.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    if (!ticket) {
      return res.status(404).json({ error: "No such Ticket" });
    }

    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketByID,
  deleteByID: deleteTicket,
  updateTicket,
};
