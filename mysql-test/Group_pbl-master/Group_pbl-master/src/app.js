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
    res.sendFile(staticpath + '/index.html');
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
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use('/user',usersRouter);
app.use('/book',bookRouter);

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