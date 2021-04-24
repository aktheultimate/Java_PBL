const express=require('express');
const router=express.Router();
const {bookTicket, getTickets, cancelTicket}=require('../controllers/ticket')

router.post('/bookTicket',bookTicket);
//router.get('/myTickets',getTickets);
router.post('/cancelTicket',cancelTicket);

module.exports=router;