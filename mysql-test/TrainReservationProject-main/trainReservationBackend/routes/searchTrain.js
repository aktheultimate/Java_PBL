const express=require('express');
const { searchTrain, checkSeatAvailability, calculateFair } = require('../controllers/searchTrain');
const router=express.Router();

router.post('/search',searchTrain);
router.post('/seatAvalibility',checkSeatAvailability);
router.post('/calculateFair',calculateFair);

module.exports=router;