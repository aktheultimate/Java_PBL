const express=require('express');
const { userLogout } = require('../controllers/logout');
const router=express.Router();

router.get('/',userLogout)

module.exports=router;