var mysql = require('mysql');

exports.dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

exports.dbConnection.connect();

// dbConnection.query("select * from Messages", function(err, rows, fields){
//   console.log("err = ", err);
//   console.log("fields = ", fields);
//   console.log("rows = ", rows);
// });
