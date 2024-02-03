const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    issueType: {
      type: String,
      enum: ["bug", "feature_request", "other"],
      default:'bug'
    },
    subject: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["OPEN", "CLOSED", "ONHOLD","NEW"],
      default: "NEW",
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
