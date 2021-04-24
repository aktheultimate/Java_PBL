const express=require('express');
const { updatePassword } = require('../controllers/updatePassword');
const router=express.Router();

router.put('/',updatePassword);

module.exports=router;