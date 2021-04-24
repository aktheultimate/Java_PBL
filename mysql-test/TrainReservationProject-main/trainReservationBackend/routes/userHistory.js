const express=require('express');
const { getActiveTickets, getAllTickets, getCancelledTickets } = require('../controllers/userHistory');
const router=express.Router();

router.get('/all',getAllTickets);
router.get('/active',getActiveTickets);
router.get('/cancelled',getCancelledTickets);


module.exports=router;