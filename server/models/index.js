var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      
      var conn = db.connection();
      conn.connect();

      var query = "SELECT * FROM messages";

      conn.query(query, function(err, rows, fields){
        if(!err) {
          callback(null, rows);
        }
        else {
          callback(err, null);
        }
      });
      conn.end();
    }, // a function which produces all the messages
    post: function (message, callback) {
      // console.log('post messages in models', message, callback);

      var conn = db.connection();
      conn.connect();

      conn.query('INSERT INTO messages SET ?', message, function(err, rows, fields){
        if(!err){
          console.log("new message inserted into messages table");
          callback(null, rows.insertId);
        }
        else{
          callback(err, null);
        }
      });
      
      conn.end();

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {

      var conn = db.connection();
      conn.connect();

      var query = "SELECT * FROM users;";

      conn.query(query, function(err, results){
        if(!err){
          console.log("user get request", results);
          callback(null, results);
        } else {
          console.log(err);
          callback(err, null);
        }
      });
      conn.end();
    },
    post: function (user, callback) {
      
      var conn = db.connection();
      conn.connect();

      conn.query("INSERT INTO users SET ?", user, function(err, rows, fields) {
        if(!err){
          console.log("new user inserted into users table")
          console.log(rows.insertId);
          callback(null, rows.insertId);
        } else {
          callback(err, null);
        }
      });
      conn.end();
    }
  }
};

// function(callback, processData)