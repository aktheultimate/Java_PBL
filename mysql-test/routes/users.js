const express = require('express');
const app = express();
var router = express.Router();
var db = require('../app');
router.get('/user',function(req, res, next){
       var sql = 'SELECT * FROM travelpoint';
       db.query(sql,function(err,rows){
           if(err)
            throw err;
           else
           res.render('Flights',{title: 'FLIGHT DATA', userData: data});

       });
});

module.exports = router;