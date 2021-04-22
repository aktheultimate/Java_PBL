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
var connection = require('./app');
//var indexRouter = require('./Index.html');
var usersRouter = require('./routes/usersfile');
const { title } = require('process');
var app = express();

app.listen(3000);

app.get('/',(req,res) => {
    res.sendFile('./Index.html',{root:__dirname});
});


/*app.get('/user',(req,res)=>
{
    res.render('Flights');
    /*const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'admin2001!',
        database: 'pbl',
        charset: 'utf8'
      });
    
      var reo = '<html><head><title>Flight display</title></head><body><h1>FLIGHTS!</h1>{${table}}</body></html>';
    
      function setResHtml(sql, cb){
          pool.getConnection((err, con)=>{
              if(err) throw err;
    
              con.query(sql, (err, res, cols)=>{
                  if(err) throw err;
                  var table = '';
                  for(var i=0;i<res.length;i++){
                      table += '<tr><td>' + (i+1) + '</td><td>' + res[i].From + '</td><td>' + res[i].To + '</td><td>' + res[i].Flight_name + '</td><td>' + res[i].Class + '</td><td>' + res[i].Cost + '</td></tr>';
    
                  }
                  table = '<table border="1"><tr><th>Serial Number</th><th>From</th><th>To</th><th>Flight Name</th><th>Class</th><th>Cost</th></tr>' + table + '</table>';
    
                  con.release();
                  return cb(table);
              });
          });
      }
    
      let sql = 'SELECT * FROM travelpoint';
    
      const server = http.createServer((req, res)=>{
          setResHtml(sql, resql=>{
              reo = reo.replace('{${table}}', resql);
              res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
              res.write(rea, 'utf-8');
              res.end();
          });
    
      });*/
//});*/

app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
/*app.get('/user',(req,res)=>
{
    res.sendFile('./routes/users.js', {root:__dirname});
});*/
app.use('/user',usersRouter);

/*app.use(session({ 
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))*/

//app.use(flash());
//app.use(expressValidator());

//app.use('/', indexRouter);


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