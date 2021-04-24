const express = require('express');

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');
var flash = require('express-flash');
var bodyParser = require('body-parser');

const { table } = require('console');
const http = require('http');
const mysql = require('mysql');
var connection = require('./app-sql');
//var indexRouter = require('./Index.html');
var usersRouter = require('./routes/usersfile');
var bookRouter = require('./routes/booking');
var verRouter = require('./routes/verify');
const { title } = require('process');
var app = express();

const port = 3080; //Changed port to 3080 from 3000
//register view engine
app.set('view engine', 'ejs');

//get path
const staticpath = path.join(__dirname, "../public");
console.log(staticpath);
//const staticbook = path.join(_)
//listen for req

app.listen(port, () => {
    console.log(`listening to server at port : ${port}`)
});

app.use(express.static(staticpath));

// app.get('/demo', (req, res) => {
//     res.sendFile('./demo.html', { root: __dirname });
// });

app.get('/', (req, res) => {
    res.render(staticpath + '/index.ejs');
});

// app.get('/hi', (req, res) => {
//     res.redirect('/demo');
// });

// app.use((req, res) => {
//     res.status(404).send('<h1>404 Error</h1>');
// });

/*app.get('/',(req,res) => {
    res.sendFile('./Index.html',{root:__dirname});
});*/

app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');

app.use(logger('dev'));
//app.use(bodyParser);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use('/user',usersRouter);
//app.use('/book',bookRouter);
app.get('/book',function(req,res){
  let sqlq="SELECT * FROM travelpoint WHERE To_code=? AND From_code=? AND Flight_Name=? AND Class=?";
  var a1 = req.query.to;
    var b2 = req.query.from;
    var c3 = req.query.flight;
    var d4=req.query.cls;
  connection.query(sqlq,[a1,b2,c3,d4],function(err,rows){
    if(err){
        //req.flash('error', err); 
       // res.render('Checker',{page_title:"FLIGHTS DATA",data:''});   
       throw err;
       }else{rows.forEach((row)=>{
        // console.log("Serial: ", row.Serial, " From: ", row.From, "  To: ", row.To, " Flight name: ", row.Flight_name, " Class: ", row.Class, " Cost: ",row.Cost);
       
       
         let tot = Number(row.Cost);
         let idno = x = Math.floor((Math.random() * 1000000) + 1);;
         let nooft = req.query.no;
         tot = tot*nooft;
         let td = req.query.times;
         let cls = req.query.cls;
         //let tot = 70000;
         let name = "Akash";
           let sqls = "INSERT INTO userdata (Serial_No,Name,Number_of_tickets,Class,Time_date,Total_Amount_Paid) VALUES ("+idno+",'"+name+"',"+nooft+",'"+cls+"','"+td+"',"+tot+")";
           let q = connection.query(sqls,(err,results)=>{
               if(err) throw err;
               console.log("VALUES INSERTED!\n");
               res.render('Booked');
               //res.redirect('/');
             });
            });
       }
      
        
        

  });

  });
//app.use('/verify',verRouter);
app.get('/verify',function(req, res){
  
    var a1 = req.query.to;
    console.log(a1);
    var b2 = req.query.from;
    var c3 = req.query.flight;
    var d4=req.query.cls;
    //var a1 = "PUN";
    //var b2 = "LKO";
    var a = String(a1);
    var b = String(b2);
    let n = 5;
    //app.get('/verify',(res,req)=>{
        let sqlq = "SELECT * FROM travelpoint WHERE To_code=? AND From_code=? AND Flight_Name=? AND Class=?";
        // ;
        connection.query(sqlq,[a1,b2,c3,d4],function(err,rows){
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

/*app.use(function(req, res, next) {
    next(createError(404));
  });  
 
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
    res.status(err.status || 500);
    res.render('error');
  });*/

 
//404 PAGE
app.use((req,res) => {
    res.status(404).sendFile('./404.html',{root:__dirname});
});

module.exports = app;