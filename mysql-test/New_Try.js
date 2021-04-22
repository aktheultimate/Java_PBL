const { table } = require('console');
const http = require('http');
const mysql = require('mysql');
const { title } = require('process');

const pool = mysql.createPool({
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

  });