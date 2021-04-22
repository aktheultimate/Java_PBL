const { Router } = require('express');
var express = require('express');
var router = express.Router();
var connection  = require('../app-sql');
 

 
/* GET home page. */
router.get('/', function(req, res, next) {
      
 connection.query('SELECT * FROM travelpoint',function(err,rows)     {
 
        if(err){
         //req.flash('error', err); 
         res.render('Flights',{page_title:"FLIGHTS DATA",data:''});   
        }else{
            
            res.render('Flights',{page_title:"FLIGHTS DATA",data:rows});
        }
                            
         });
        
    });

    

    router.get('/find', function(req, res, next) {
      
        connection.query('SELECT * FROM travelpoint WHERE ',function(err,rows)     {
        
               if(err){
                //req.flash('error', err); 
                res.render('Flights',{page_title:"FLIGHTS DATA",data:''});   
               }else{
                   
                   res.render('Flights',{page_title:"FLIGHTS DATA",data:rows});
               }
                                   
                });
               
           });

    module.exports = router;