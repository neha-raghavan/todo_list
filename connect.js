let mysql = require('mysql');

let connection = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6589228",
  password: "aeycVIlinn",
  database: "sql6589228"
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
connection.query('select * from todo',(err,rows)=>{
  if (err) throw err;
  rows.forEach(row => {
    console.log(`${row.content} ${row.completed}`);
  });
 
});
connection.end((err)=>{});