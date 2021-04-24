var express = require('express');
var router = express.Router();
var connection  = require('../src/app-sql');
var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
function openitwe()
{
    from = document.getElementById('from').value;
    to = document.getElementById('to').value;
    //alert("Recieved From: " + from + " to: " + to);
    return {to, from};
    //localStorage.setItem("tolocal", to);
    //localStorage.setItem("fromlocal",from);
}
module.exports = openitwe;
    //console.log(to, from);
/*router.get('/', function(req, res, next) {
      
    var a1=to;
    var b2=from;
    //var s = "Indigo";
    var a = String(a1);
    var b = String(b2);
    let n = 5;
    //app.get('/verify',(res,req)=>{
        let sqlq = "SELECT * FROM travelpoint WHERE To_code=? AND From_code=?";
        // ;
        connection.query(sqlq,["PUN","LKO"],function(err,rows){
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
       

    }*/
    
  //  module.exports = router;