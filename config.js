let mysql = require('mysql');

const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "sql6.freesqldatabase.com",
    user: "sql6589228",
    password: "aeycVIlinn",
    database: "sql6589228",
  },
  listPerPage: 10,
};
module.exports = config


var con = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6589228",
  password: "aeycVIlinn",
  database: "sql6589228"
});

con.connect(function(err) {
  if (err) throw err;
console.log("connected");
});

var sql ="select * from todo";
con.query(sql, function (err, result) {
    if (err) {
        throw err;

    }

    console.log(result);
  });

/*var firstName = document.getElementById("content");
var lastName = document.getElementById("completed");

var sql = "INSERT INTO accounts (UserName, FirstName, LastName, Email, UserPassword) VALUES ('"+userName+ "', '"+firstName+"','"+lastName+"','"+email+"','"+psw+"')";
con.query(sql, function (err, result) {
    if (err) {
        throw err;

    }

    console.log(result.affectedRows + " record(s) updated");
  });*/
