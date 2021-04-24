const express=require('express');
const { forgotPassword } = require('../controllers/forgotPassword');
const router=express.Router();

router.put('/',forgotPassword);

module.exports=router;