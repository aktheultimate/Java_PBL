const express=require('express');
const { addRail } = require('../controllers/addRail');
const router=express.Router();

router.post('/',addRail);

module.exports=router;