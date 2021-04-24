var {d,f} = require("../../public/Tryagain");
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const { Router } = require('express');
var express = require('express');
var router = express.Router();
var connection  = require('../app-sql');
//const ta = require('..//../public/Tryagain');
/*function openitwe()
{
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    alert("Recieved From: " + from + " to: " + to);
    module.exports = {to,from};
}*/
    //console.log(to, from);
router.post('/', function(req, res, next) {
      
    //let {a1,b2}=good.openitwe();
   // var g = localStorage.getItem("tolocal"); 
    //var s = localStorage.getItem("fromlocal"); 
    var a1 = "PUN";
    var b2 = "LKO";
   // var a1= good.to;
    //var b2 = good.from;
    //var s = "Indigo";
    var a = String(a1);
    var b = String(b2);
    let n = 5;
    //app.get('/verify',(res,req)=>{
        let sqlq = "SELECT * FROM travelpoint WHERE To_code=? AND From_code=?";
        // ;
        connection.query(sqlq,[a1,b2],function(err,rows){
            if(err){
                //req.flash('error', err); 
               // res.render('Checker',{page_title:"FLIGHTS DATA",data:''});   
               throw err;
               }else{
                console.log('Data recieved from Travelpoint Database is: \n ');
                rows.forEach((row)=>{
                 // console.log("Serial: ", row.Serial, " From: ", row.From, "  To: ", row.To, " Flight name: ", row.Flight_name, " Class: ", row.Class, " Cost: ",row.Cost);
                
                });
                res.render('Check',{page_title:"FLIGHTS DATA",data:rows});
                   
                   //res.render('Checker',{page_title:"FLIGHTS DATA",data:rows});
               }
    
          });
    
        }); 

        module.exports = router;