const express=require('express');
const { adminRegister, adminLogout, adminLogin, forgotPassword, updatePassword } = require('../controllers/adminAuth');
const router=express.Router();


router.post('/register',adminRegister);
router.post('/login',adminLogin);
router.get('/logout',adminLogout);
router.put('/forgotPassword',forgotPassword);
router.put('/updatePassword',updatePassword);

module.exports=router;