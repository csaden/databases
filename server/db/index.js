var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = function() {
  return mysql.createConnection({
      user     : 'root',
      password : '',
      database : 'chat',
      port     : 3000
  });
};

// var connect = function(connection) {
//   connection.connect(function(err){
//     if(!err){
//           console.log("You are connected to the database.");
//     }
//     else{
//           throw err;
//     }
//   });
// };

// var end = function(connection) {
//   connection.end(function(err){
//     if(!err){
//           console.log("Mysql connection is terminated.")
//     }
//     else{
//           throw err;
//     }
//   });
// };

module.exports.connection = connection;