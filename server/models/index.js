var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      
      var conn = db.connection();
      conn.connect();

      var query = "SELECT * FROM messages";

      conn.query(query, function(err, rows, fields){
        if(!err){
          console.log(rows);
          console.log('retrieving messages from the database');
          callback(rows);
        }
        else {
          throw err;
        }
      });
      conn.end();
    }, // a function which produces all the messages
    post: function (message, callback) {
      // console.log('post messages in models', message, callback);

      var conn = db.connection();
      conn.connect();

      console.log("Message in post pre-query: ");
      console.dir(message);
      message.roomname = "lobby";

      conn.query('INSERT INTO messages SET ?', message, function(err, rows, fields){
        console.log('running the query');
        console.log(rows);
        if(!err){
          console.log("new message inserted into messages table")
        }
        else{
          throw err;
        }
      });
      
      var query = "SELECT objectId FROM messages WHERE createdAt = " + message['createdAt'] + ";";

      conn.query(query, function(err, result) {
        console.log(result);
        if (!err) {
          callback(result);
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

      var query = "SELECT username FROM users;";

      conn.query(query, function(err, results){
        if(!err){
          console.log(results);

          callback(results);
        } else {
          throw err;
        }
      });
      conn.end();
    },
    post: function (user, callback) {
      
      var conn = db.connection();
      conn.connect();

      var query = "INSERT INTO users (username) VALUES ("+user['username']+");";

      conn.query(query, function(err, results){
        if(!err){
          console.log("new user inserted into users table")
        }
        else{
          throw err;
        }
      });
      
      query = "SELECT username FROM users WHERE username = " + user['username'] + ";";

      conn.query(query, function(err, result) {
        console.log(result);
        if (!err) {
          callback(result);
        }
      });

      conn.end();
    }
  }
};

// function(callback, processData)