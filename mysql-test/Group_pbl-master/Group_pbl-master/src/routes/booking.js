const { Router } = require('express');
var express = require('express');
var router = express.Router();
var connection  = require('../app-sql');
//const { to } = require('./book');
var del = require('../../public/Try');

//function openFormid()
{
  // var from = document.getElementById('from').value;
  //  var to = document.getElementById('to').value;
   // alert("Recieved From: " + from + " to: " + to);
}

router.get('/', function(req, res, next) {
    let sqls = "INSERT INTO userdata (Serial_No,Name,Number_of_tickets,Class,Time_date,Total_Amount_Paid) VALUES (7977,'Dummy',4,'Economy','4:50',50000)";
    let q = connection.query(sqls,(err,results)=>{
        if(err) throw err;
        console.log("VALUES INSERTED!\n");
        res.render('Book');
    });
});
   
       module.exports = router;
    