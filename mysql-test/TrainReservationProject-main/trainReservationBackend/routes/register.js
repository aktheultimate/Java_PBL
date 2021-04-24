const express = require('express');
const router=express.Router();

const userRegister=require('../controllers/register');



router.post('/',userRegister);

module.exports=router;