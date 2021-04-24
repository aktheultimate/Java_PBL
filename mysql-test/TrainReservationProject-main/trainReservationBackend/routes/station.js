const express= require('express');
const router= express.Router();
const {addStation}=require('../controllers/addStation')

router.post('/',addStation);

module.exports=router;