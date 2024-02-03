const express = require('express')
const router = express.Router()

const {createTicket,getAllTickets,getTicketByID,deleteByID,updateTicket} = require('../controllers/ticketController')

router.get("/all",getAllTickets)
router.get("/ticket/:id",getTicketByID)

router.post("/create/ticket",createTicket)
router.delete("/ticket/:id",deleteByID)
router.patch("/ticket/:id",updateTicket)

module.exports = router