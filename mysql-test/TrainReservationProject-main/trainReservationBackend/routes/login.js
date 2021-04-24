const express = require('express');
const router=express.Router();

const {usergooglelogin, userlogin}=require('../controllers/login');




router.post('/manual',userlogin);
router.post('/google',usergooglelogin);



module.exports=router;