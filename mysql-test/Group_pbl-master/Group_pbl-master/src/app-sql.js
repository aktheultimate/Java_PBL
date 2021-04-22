



// JavaScript source code
const mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin2001!',
  database: 'pbl'
});


connection.connect(function(err){
  if (err) throw err;
  console.log('Connected!');
});

module.exports = connection;

/*connection.query('SELECT * FROM airport', (err,rows)=>{
if (err) throw err;
console.log('Data recieved from Airport Database is: \n ');
rows.forEach((row)=>{
	console.log("Airport: ", row.Airport, " Name: ", row.Name, " City: ", row.City, " State: ", row.State);

});
console.log("\n-----------\n");
})

connection.query('SELECT * FROM flight', (err,rows)=>{
if (err) throw err;
console.log('Data recieved from Flight Database is: \n ');
rows.forEach((row)=>{
	console.log("Flight Number: ", row.Flight_No, "Airline Name: ", row.Airline, "Whether available on weekdays or not?", row.Weekdays);

});
console.log("\n-----------\n");
})*/